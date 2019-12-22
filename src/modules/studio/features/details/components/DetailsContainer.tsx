import React, { memo } from 'react';
import { connect } from 'react-redux';
import { RootState } from '@model/types';
import {
  getConfig,
  getMetroList,
} from '@modules/studio/features/data/model/selectors';
import { Details } from './Details';
import {
  getInformation,
  getInformationLoading,
  getReservationsWithColor,
  getRooms,
  getRoomsLoading,
  getWorkHours,
} from '../model/selectors';
import * as data from '../../data';

type Props = ReturnType<typeof mapStateToProps>;

const mapStateToProps = (state: RootState) => ({
  isInformationLoading: getInformationLoading(state),
  isMetroListLoading: data.selectors.getMetroListLoading(state),
  isConfigLoading: data.selectors.getConfigLoading(state),
  reservations: getReservationsWithColor(state),
  workHours: getWorkHours(state),
  information: getInformation(state),
  metroList: getMetroList(state),
  config: getConfig(state),
  isRoomsLoading: getRoomsLoading(state),
  rooms: getRooms(state),
});

const _DetailsContainer = ({
  isInformationLoading,
  isConfigLoading,
  isMetroListLoading,
  information,
  metroList,
  config,
  workHours,
  reservations,
  isRoomsLoading,
  rooms,
}: Props) => {
  const { photoIds, ...restInformation } = information;

  return (
    <Details
      isLoading={isInformationLoading}
      isConfigLoading={isConfigLoading}
      isMetroListLoading={isMetroListLoading}
      information={restInformation}
      metroList={metroList}
      config={config}
      photoIds={photoIds}
      workHours={workHours}
      reservations={reservations}
      isRoomsLoading={isRoomsLoading}
      rooms={rooms}
    />
  );
};

export const DetailsContainer = connect(mapStateToProps)(
  memo(_DetailsContainer)
);
