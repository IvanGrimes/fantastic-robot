import React from 'react';
import { Wrapper } from './Controls.styles';
import { ViewColumn } from './ViewColumn';
import { useCalendar } from '../../CalendarContext';

export type ControlsProps = {
  className?: string;
};

export const Controls = ({ className = '' }: ControlsProps) => {
  const { canChangeStep } = useCalendar();

  return (
    <Wrapper className={className}>{canChangeStep && <ViewColumn />}</Wrapper>
  );
};
