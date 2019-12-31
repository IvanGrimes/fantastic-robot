import React from 'react';
import { Wrapper } from './Controls.styles';
import { useCalendar } from '../../CalendarContext';
import { ClearSelected } from './ClearSelected';
import { ViewColumn } from './ViewColumn';

export type ControlsProps = {
  className?: string;
};

export const Controls = ({ className = '' }: ControlsProps) => {
  const { canChangeStep } = useCalendar();

  return (
    <Wrapper className={className}>
      <ClearSelected />
      {canChangeStep && <ViewColumn />}
    </Wrapper>
  );
};
