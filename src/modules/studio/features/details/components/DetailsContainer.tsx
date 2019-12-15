import React, { memo } from 'react';
import { connect } from 'react-redux';
import { RootState } from '@model/types';
import { Details } from './Details';
import { getReservationsWithColor, getWorkHours } from '../model/selectors';

type Props = ReturnType<typeof mapStateToProps>;

const mapStateToProps = (state: RootState) => ({
  reservations: getReservationsWithColor(state),
  workHours: getWorkHours(state),
});

const _DetailsContainer = ({ workHours, reservations }: Props) => {
  return <Details workHours={workHours} reservations={reservations} />;
};

export const DetailsContainer = connect(mapStateToProps)(
  memo(_DetailsContainer)
);
