import React, { useContext } from 'react';
import { CalendarContext } from '../../CalendarContainer';
import { Wrapper, Control } from './RangeNavigation.styles';
import { DirectionButton } from './DirectionButton';
import { ViewRange } from './ViewRange';

export const RangeNavigation = () => {
  const { previousRange, nextRange, previousMonth, nextMonth } = useContext(
    CalendarContext
  );

  return (
    <Wrapper>
      <Control>
        <DirectionButton direction="left" onClick={previousMonth} double />
        <DirectionButton direction="left" onClick={previousRange} />
      </Control>
      <ViewRange />
      <Control>
        <DirectionButton direction="right" onClick={nextRange} />
        <DirectionButton direction="right" onClick={nextMonth} double />
      </Control>
    </Wrapper>
  );
};
