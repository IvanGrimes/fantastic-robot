import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { useRouter, withRouter, NextRouter } from 'next/router';
import * as services from '@modules/services';
import { RootState } from '@model/types';
import * as ui from '@modules/ui';
import { routes } from '@utils/routes';
import * as details from '../../features/details';

const { Details: DetailsComponent } = details;
const { Link } = ui

type OwnProps = { isBot: boolean; router: NextRouter };

type Props = ReturnType<typeof mapStateToProps> &
  typeof dispatchProps &
  OwnProps;

const mapStateToProps = (state: RootState, { router }: OwnProps) => {
  const roomProps = {
    roomId: router.query.room as details.RoomId,
  };

  return {
    isInformationLoading: details.selectors.getInformationLoading(state),
    information: details.selectors.getInformation(state),
    isRoomLoading: details.selectors.getRoomLoading(state, roomProps),
    room: details.selectors.getRoomById(state, roomProps),
  };
};

const dispatchProps = {
  handleFetchReservations: details.actions.fetchReservationsAsync.request,
  handleFetchRoom: details.actions.fetchRoomAsync.request,
  handleFetchInformation: details.actions.fetchInformationAsync.request,
};

const _Room = ({
  handleFetchReservations,
  handleFetchRoom,
  handleFetchInformation,
  isInformationLoading,
  information,
  isRoomLoading,
  room,
}: Props) => {
  const { query } = useRouter();
  const backLink = useMemo(() => {
    if (isInformationLoading) {
      return null;
    }

    return (
      <Link to={routes.studio(information.id)}>
        Студии &bull; {information.name}
      </Link>
    );
  }, [information.id, information.name, isInformationLoading]);

  useEffect(() => {
    const { studio: studioId, room: roomId } = query;

    if (!isRoomLoading && !room.id) {
      handleFetchRoom({ roomId: roomId as string });
    }
    if (!isInformationLoading && !information.id) {
      handleFetchInformation({ studioId: studioId as string });
    }
  }, [
    handleFetchInformation,
    handleFetchRoom,
    information.id,
    isInformationLoading,
    isRoomLoading,
    query,
    room.id,
  ]);

  useEffect(() => {
    const { studio: studioId } = query;

    handleFetchReservations({ studioId: studioId as string });
  }, [handleFetchReservations, query]);

  return <DetailsComponent variant="room" backLink={backLink} />;
};

export const Room = withRouter<OwnProps>(
  connect(
    mapStateToProps,
    dispatchProps
  )(
    services.withSEO<Props>(({ query }) => [
      () =>
        details.actions.fetchRoomAsync.request({
          roomId: query.room as string,
        }),
      () =>
        details.actions.fetchInformationAsync.request({
          studioId: query.studio as string,
        }),
    ])(_Room)
  )
);
