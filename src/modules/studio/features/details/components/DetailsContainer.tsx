import React, { memo } from 'react';
import { connect } from 'react-redux';
import { RootState } from '@model/types';
import { Details } from './Details';
import {
  getInformation,
  getInformationLoading,
  getReservationsWithColor,
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
});

const _DetailsContainer = ({
  isInformationLoading,
  information,
  workHours,
  reservations,
}: Props) => {
  return (
    <Details
      isPhotosLoading={isInformationLoading}
      photoIds={information.photoIds}
      workHours={workHours}
      reservations={reservations}
    />
  );
};

export const DetailsContainer = connect(mapStateToProps)(
  memo(_DetailsContainer)
);
