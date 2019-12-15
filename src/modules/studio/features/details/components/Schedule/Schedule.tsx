import React from 'react';
import { Calendar } from '../../../calendar';
import { getReservationsWithColor, getWorkHours } from '../../model/selectors';

export type ScheduleProps = {
  workHours: ReturnType<typeof getWorkHours>;
  reservations: ReturnType<typeof getReservationsWithColor>;
};

export const Schedule = ({ workHours, reservations }: ScheduleProps) => (
  <Calendar workHours={workHours} reservations={reservations} />
);
