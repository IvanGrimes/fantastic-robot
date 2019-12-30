import React from 'react';

export type ScheduleProps = {
  reservations: {};
  workHours: {
    [key: string]: {
      from: number;
      to: number;
    };
  };
};

export const Schedule = (_props: ScheduleProps) => <div>calendar</div>;
