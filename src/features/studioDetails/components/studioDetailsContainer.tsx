import React, { memo } from 'react';
import { connect } from 'react-redux';
import { StudioDetails } from './studioDetails';
import { RootState } from '../../../model/types';
import { getStudioReservations, getStudioWorkHours } from '../model/selectors';

type Props = ReturnType<typeof mapStateToProps>;

const mapStateToProps = (state: RootState) => ({
  reservations: getStudioReservations(state),
  workHours: getStudioWorkHours(state),
});

const _StudioDetailsContainer = ({ workHours, reservations }: Props) => {
  return <StudioDetails workHours={workHours} reservations={reservations} />;
};

export const StudioDetailsContainer = connect(mapStateToProps)(
  memo(_StudioDetailsContainer)
);
