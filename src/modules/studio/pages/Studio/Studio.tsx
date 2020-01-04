import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { withSEO } from '@modules/services/HOC/withSEO';
import { RootState } from '@model/types';
import Link from 'next/link';
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
    if (typeof studioId === 'string') {
      if (
        (!isRoomsLoading && !rooms.length) ||
        (rooms.length && rooms[0].studioId !== studioId)
      ) {
        handleFetchRooms({ studioId });
      }
      if (!isInformationLoading && information.id !== studioId) {
        handleFetchInformation({ studioId });
      }
    }
  }, [
    handleFetchInformation,
    handleFetchRooms,
    information.id,
    isInformationLoading,
    isRoomsLoading,
    query.studio,
    rooms,
    rooms.length,
  ]);

  useEffect(() => {
    const studioId = query.studio;

    if (typeof studioId === 'string') {
      handleFetchReservations({ studioId });
    }
  }, [handleFetchReservations, query.studio]);

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
        contacts: information.contacts,
        location: information.location,
      }}
      rooms={{
        isLoading: isRoomsLoading,
        list: rooms,
      }}
      schedule={{
        workHours,
        reservations,
      }}
      dressingRoom={information.dressingRoom}
      workingHours={information.workingHours}
      backLink={
        <Link href="/">
          <a href="/">Студии</a>
        </Link>
      }
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
