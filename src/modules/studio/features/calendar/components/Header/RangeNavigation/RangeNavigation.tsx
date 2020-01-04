import React from 'react';
import { useCalendar } from '../../CalendarContext';
import { Wrapper, Control } from './RangeNavigation.styles';
import { useInjections } from '../../calendarInjector';

export type RangeNavigationProps = {
  onPreviousRange?: () => void;
  onNextRange?: () => void;
};

export const RangeNavigation = ({
  onPreviousRange,
  onNextRange,
}: RangeNavigationProps) => {
  const { DirectionButton, ViewRange } = useInjections();
  const { previousRange, nextRange, previousMonth, nextMonth } = useCalendar();

  return (
    <Wrapper>
      <Control>
        <DirectionButton direction="left" onClick={previousMonth} double />
        <DirectionButton
          direction="left"
          onClick={onPreviousRange || previousRange}
        />
      </Control>
      <ViewRange />
      <Control>
        <DirectionButton direction="right" onClick={onNextRange || nextRange} />
        <DirectionButton direction="right" onClick={nextMonth} double />
      </Control>
    </Wrapper>
  );
};
