import React from 'react';
import { Calendar } from '@modules/studio/features/calendar';
import { DynamicRendering } from '@modules/ui';
import { Block } from '../Block';

export type ScheduleProps = {
  reservations: {};
  workHours: {
    [key: string]: {
      from: number;
      to: number;
    };
  };
};

export const Schedule = (_props: ScheduleProps) => (
  <Block title="Расписание">
    <DynamicRendering>
      <Calendar />
    </DynamicRendering>
  </Block>
);
