import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { withSEO } from '@modules/services/HOC/withSEO';
import { RootState } from '@model/types';
import * as details from '../../features/details';

const { Details: DetailsComponent } = details;

type Props = ReturnType<typeof mapStateToProps> &
  typeof dispatchProps & { isBot: boolean };

const mapStateToProps = (state: RootState) => ({
  isInformationLoading: details.selectors.getInformationLoading(state),
  information: details.selectors.getInformation(state),
  isRoomsLoading: details.selectors.getRoomsLoading(state),
  rooms: details.selectors.getRooms(state),
  reservations: details.selectors.getReservationsWithColor(state),
  workHours: details.selectors.getWorkHours(state),
});

const dispatchProps = {
  handleFetchReservations: details.actions.fetchReservationsAsync.request,
  handleFetchRooms: details.actions.fetchRoomsAsync.request,
  handleFetchInformation: details.actions.fetchInformationAsync.request,
};

const _Studio = ({
  handleFetchReservations,
  handleFetchRooms,
  handleFetchInformation,
  isBot,
  isInformationLoading,
  information,
  isRoomsLoading,
  rooms,
  reservations,
  workHours,
}: Props) => {
  const { query } = useRouter();

  useEffect(() => {
    const studioId = query.studio;

    if (typeof studioId === 'string' && !isBot) {
      handleFetchReservations({ studioId });
      handleFetchRooms({ studioId });
      handleFetchInformation({ studioId });
    }
  }, [
    handleFetchInformation,
    handleFetchReservations,
    handleFetchRooms,
    isBot,
    query.studio,
  ]);

  return (
    <DetailsComponent
      information={{
        isLoading: isInformationLoading,
        description: information.description,
        equipmentIds: information.equipmentIds,
        hasOnlinePayment: information.hasOnlinePayment,
        photoIds: information.photoIds,
        price: information.priceType,
        roomsCount: information.roomsCount,
        stationIds: information.stationIds,
        title: information.name,
        interiorIds: information.interiorIds,
      }}
      rooms={{
        isLoading: isRoomsLoading,
        list: rooms,
      }}
      schedule={{
        workHours,
        reservations,
      }}
      contacts={information.contacts}
      dressingRoom={information.dressingRoom}
      workingHours={information.workingHours}
    />
  );
};

export const Studio = connect(
  mapStateToProps,
  dispatchProps
)(
  withSEO<Props>(({ query }) => {
    const studioId = query.studio as string;

    return [
      () => details.actions.fetchRoomsAsync.request({ studioId }),
      () => details.actions.fetchInformationAsync.request({ studioId }),
    ];
  })(_Studio)
);
