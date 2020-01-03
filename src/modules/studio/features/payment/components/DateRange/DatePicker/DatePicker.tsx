import React from 'react';
import { Calendar } from '@modules/studio/features/calendar';
import { Wrapper, Cell } from './DatePicker.styles';
import { ViewRange } from './ViewRange';

export type DatePickerProps = {
  isActive: boolean;
};

const calendarInjections = {
  Controls: () => null,
  WeekDay: () => null,
  Cell,
  ViewRange,
};

export const DatePicker = ({ isActive }: DatePickerProps) => (
  <Wrapper isVisible={isActive}>
    <Calendar injections={calendarInjections} />
  </Wrapper>
);
