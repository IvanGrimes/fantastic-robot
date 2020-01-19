import React, { forwardRef, Fragment } from 'react';
import * as calendar from '../../../../calendar';
import { Wrapper, Cell } from './DatePicker.styles';
import { ViewRange } from './ViewRange';
import { Row } from './Row';
import { RangeNavigation } from './RangeNavigation';

const { Calendar } = calendar

export type DatePickerProps = {
  isActive: boolean;
  x: number;
  y: number;
};

const calendarInjections = {
  Controls: () => <Fragment />,
  WeekDay: () => <Fragment />,
  Cell,
  ViewRange,
  Row,
  RangeNavigation,
};

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  ({ isActive, x, y }, ref) => (
    <Wrapper ref={ref} isVisible={isActive} x={x} y={y}>
      <Calendar injections={calendarInjections} />
    </Wrapper>
  )
);
