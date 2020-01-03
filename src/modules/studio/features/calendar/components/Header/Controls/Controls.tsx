import React from 'react';
import { Wrapper } from './Controls.styles';
import { useCalendar } from '../../CalendarContext';
import { useInjections } from '../../calendarInjector';

export type ControlsProps = {
  className?: string;
};

export const Controls = ({ className = '' }: ControlsProps) => {
  const { ClearSelected, ViewColumn } = useInjections();
  const { canChangeStep } = useCalendar();

  return (
    <Wrapper className={className}>
      <ClearSelected />
      {canChangeStep && <ViewColumn />}
    </Wrapper>
  );
};
