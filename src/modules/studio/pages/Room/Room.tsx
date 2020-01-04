import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { useRouter, withRouter, NextRouter } from 'next/router';
import { withSEO } from '@modules/services/HOC/withSEO';
import { RootState } from '@model/types';
import Link from 'next/link';
import * as details from '../../features/details';

const { Details: DetailsComponent } = details;

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
    reservations: details.selectors.getReservationsWithColor(state),
    workHours: details.selectors.getWorkHours(state),
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
  reservations,
  workHours,
}: Props) => {
  const { query } = useRouter();
  const backLink = useMemo(
    () =>
      isInformationLoading ? null : (
        <Link href="/[studio]" as={`/${information.id}`} passHref>
          <a href="/">Студии &bull; {information.name}</a>
        </Link>
      ),
    [information.id, information.name, isInformationLoading]
  );

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

  return (
    <DetailsComponent
      information={{
        isLoading: isInformationLoading || isRoomLoading,
        equipmentIds: information.equipmentIds,
        hasOnlinePayment: information.hasOnlinePayment,
        photoIds: room.photoIds,
        price: room.averagePrice,
        title: room.name,
        interiorIds: room.interiorIds || undefined,
        contacts: information.contacts,
        location: information.location,
      }}
      schedule={{
        workHours,
        reservations,
      }}
      dressingRoom={information.dressingRoom}
      workingHours={information.workingHours}
      room={{
        isLoading: isRoomLoading,
        data: room,
      }}
      backLink={backLink}
    />
  );
};

export const Room = withRouter<OwnProps>(
  connect(
    mapStateToProps,
    dispatchProps
  )(
    withSEO<Props>(({ query }) => [
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
