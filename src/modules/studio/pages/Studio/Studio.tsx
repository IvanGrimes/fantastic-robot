import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import * as services from '@modules/services';
import { RootState } from '@model/types';
import * as ui from '@modules/ui';
import { routes } from '@utils/routes';
import * as details from '../../features/details';

const { Details } = details;
const { Link } = ui;

type Props = ReturnType<typeof mapStateToProps> &
  typeof dispatchProps & { isBot: boolean };

const mapStateToProps = (state: RootState) => ({
  isInformationLoading: details.selectors.getInformationLoading(state),
  information: details.selectors.getInformation(state),
  isRoomsLoading: details.selectors.getRoomsLoading(state),
  rooms: details.selectors.getRooms(state),
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
    <Details variant="studio" backLink={<Link to={routes.main}>Студии</Link>} />
  );
};

export const Studio = connect(
  mapStateToProps,
  dispatchProps
)(
  services.withSEO<Props>(({ query }) => {
    const studioId = query.studio as string;

    return [
      () => details.actions.fetchRoomsAsync.request({ studioId }),
      () => details.actions.fetchInformationAsync.request({ studioId }),
    ];
  })(_Studio)
);
