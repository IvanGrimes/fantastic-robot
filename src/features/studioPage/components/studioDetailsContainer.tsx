import React, { memo } from 'react';
import { connect } from 'react-redux';
import { StudioDetails } from './studioDetails';
import { RootState } from '../../../model/types';
import { getStudioReservations } from '../model/selectors';

type Props = ReturnType<typeof mapStateToProps>;

const mapStateToProps = (state: RootState) => ({
  reservations: getStudioReservations(state),
});

const _StudioDetailsContainer = ({ reservations }: Props) => {
  return <StudioDetails reservations={reservations} />;
};

export const StudioDetailsContainer = connect(mapStateToProps)(
  memo(_StudioDetailsContainer)
);
