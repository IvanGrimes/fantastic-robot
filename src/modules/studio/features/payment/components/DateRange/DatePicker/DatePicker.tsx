import React from 'react';
import { Calendar } from '@modules/studio/features/calendar';
import { Wrapper, Cell } from './DatePicker.styles';
import { ViewRange } from './ViewRange';
import { Row } from './Row';
import { RangeNavigation } from './RangeNavigation';

export type DatePickerProps = {
  isActive: boolean;
};

const calendarInjections = {
  Controls: () => null,
  WeekDay: () => null,
  Cell,
  ViewRange,
  Row,
  RangeNavigation,
};

export const DatePicker = ({ isActive }: DatePickerProps) => (
  <Wrapper isVisible={isActive}>
    <Calendar injections={calendarInjections} />
  </Wrapper>
);
