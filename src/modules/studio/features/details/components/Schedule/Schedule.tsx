import React from 'react';
import { Calendar } from '../../../calendar';

export type ScheduleProps = {
  reservations: {};
  workHours: {
    [key: string]: {
      from: number;
      to: number;
    };
  };
};

export const Schedule = ({ workHours, reservations }: ScheduleProps) => (
  <Calendar workHours={workHours} reservations={reservations} />
);
