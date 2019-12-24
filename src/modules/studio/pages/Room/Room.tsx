import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter, withRouter, NextRouter } from 'next/router';
import { withSEO } from '@modules/services/HOC/withSEO';
import { Layout } from '@modules/ui/components';
import { RootState } from '@model/types';
import { Wrapper } from './Room.styles';
import * as details from '../../features/details';

const { Details: DetailsComponent } = details;

type OwnProps = { isBot: boolean; router: NextRouter };

type Props = ReturnType<typeof mapStateToProps> &
  typeof dispatchProps &
  OwnProps;

const mapStateToProps = (state: RootState, { router }: OwnProps) => {
  const roomProps = {
    roomId: router.query.roomId as details.RoomId,
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
  isBot,
  isInformationLoading,
  information,
  isRoomLoading,
  room,
  reservations,
  workHours,
}: Props) => {
  const { query } = useRouter();

  useEffect(() => {
    const { id: studioId, roomId } = query;

    if (typeof studioId === 'string' && !isBot) {
      if (!room.id) {
        handleFetchRoom({ roomId: roomId as string });
      }

      handleFetchInformation({ studioId });
      handleFetchReservations({ studioId });
    }
  }, [
    handleFetchInformation,
    handleFetchReservations,
    handleFetchRoom,
    isBot,
    query,
    room,
  ]);

  return (
    <Layout>
      <Wrapper>
        <DetailsComponent
          information={{
            isLoading: isInformationLoading || isRoomLoading,
            equipmentIds: information.equipmentIds,
            hasOnlinePayment: information.hasOnlinePayment,
            photoIds: room.photoIds,
            price: room.averagePrice,
            title: room.name,
            interiorIds: room.interiorIds || undefined,
          }}
          schedule={{
            workHours,
            reservations,
          }}
          dressingRoom={information.dressingRoom}
          workingHours={information.workingHours}
        />
      </Wrapper>
    </Layout>
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
          roomId: query.roomId as string,
        }),
      () =>
        details.actions.fetchInformationAsync.request({
          studioId: query.id as string,
        }),
    ])(_Room)
  )
);
