import React, { useContext, useEffect } from 'react';
import { useTheme } from '@material-ui/styles';
import throttle from 'lodash/throttle';
import { Paper } from './Calendar.styles';
import { Header } from './Header';
import { Body } from './Body';
import { useBrowser } from '../../../hooks/useBrowser';
import { Theme } from '../../../theme/types';
import { getBreakpoints } from '../../../theme';
import { CalendarContext } from './CalendarContainer';
// TODO: Make skeleton
// TODO: Repair build
export const Calendar = () => {
  const { setAvailableSteps, availableSteps, setStep } = useContext(
    CalendarContext
  );
  const isBrowser = useBrowser();
  const theme = useTheme<Theme>();
  const breakpoints = getBreakpoints({ theme });

  useEffect(() => {
    const handleResize = throttle(() => {
      if (window.innerWidth < breakpoints.values.md) {
        setAvailableSteps({ '4': false });
      }
      if (window.innerWidth >= breakpoints.values.md) {
        setAvailableSteps({ '4': true });
      }
      if (window.innerWidth < breakpoints.values.sm) {
        setAvailableSteps({ '2': false });
      }
      if (window.innerWidth >= breakpoints.values.sm) {
        setAvailableSteps({ '2': true });
      }
    }, 100);

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoints.values.md, breakpoints.values.sm, setAvailableSteps]);

  useEffect(() => {
    const handleStep = () => {
      if (availableSteps['0'] && !availableSteps['2'] && !availableSteps['4']) {
        setStep(0);
      }
      if (availableSteps['2'] && !availableSteps['4']) {
        setStep(2);
      }
      if (availableSteps['4']) {
        setStep(4);
      }
    };

    handleStep();
  }, [availableSteps, setStep]);

  return isBrowser ? (
    <Paper>
      <Header />
      <Body />
    </Paper>
  ) : (
    <span>loading...</span>
  );
};
