import React, { memo, ReactNode } from 'react';
import { withRouter } from 'next/router';
import { RootState } from '@model/types';
import { WithRouterProps } from 'next/dist/client/with-router';
import * as details from '@modules/studio/features/details';
import * as data from '@modules/studio/features/data';
import { connect } from 'react-redux';
import dequal from 'dequal';
import { DetailsVariant } from './types';
import {
  getInformation,
  getInformationLoading,
  getReservationsLoading,
  getRoomById,
  getRoomLoading,
  getRooms,
  getRoomsLoading,
} from '../model/selectors';
import { Details } from './Details';
import { DetailsProvider } from './DetailsContext';

export type DetailsNewContainerProps = {
  variant: DetailsVariant;
  backLink: ReactNode;
};

export type DetailsMapState = ReturnType<typeof mapStateToProps>;

type Props = DetailsNewContainerProps & DetailsMapState;

const mapStateToProps = (
  state: RootState,
  { router }: DetailsNewContainerProps & WithRouterProps
) => {
  const roomProps = { roomId: router.query.room as string };

  return {
    isInformationLoading: getInformationLoading(state),
    information: getInformation(state),
    isRoomLoading: getRoomLoading(state, roomProps),
    room: getRoomById(state, roomProps),
    isRoomsLoading: getRoomsLoading(state),
    rooms: getRooms(state),
    reservations: details.selectors.getReservationsWithColor(state),
    workHours: details.selectors.getWorkHours(state),
    isMetroListLoading: data.selectors.getMetroListLoading(state),
    isConfigLoading: data.selectors.getConfigLoading(state),
    metroList: data.selectors.getMetroList(state),
    config: data.selectors.getConfig(state),
    isReservationsLoading: getReservationsLoading(state),
  };
};

const _DetailsNewContainer = ({
  variant,
  isInformationLoading,
  information,
  isRoomsLoading,
  rooms,
  reservations,
  workHours,
  isMetroListLoading,
  metroList,
  isConfigLoading,
  config,
  isRoomLoading,
  room,
  backLink,
  isReservationsLoading,
}: Props) => (
  <DetailsProvider
    value={{
      variant,
      isStudioLoading: isInformationLoading,
      studio: information,
      isRoomLoading,
      room,
      isRoomsLoading,
      rooms,
      reservations,
      workHours,
      isMetroListLoading,
      metroList,
      isConfigLoading,
      config,
      isReservationsLoading,
    }}
  >
    <Details backLink={backLink} />
  </DetailsProvider>
);

export const DetailsContainer = withRouter(
  connect(mapStateToProps)(memo(_DetailsNewContainer, dequal))
);
