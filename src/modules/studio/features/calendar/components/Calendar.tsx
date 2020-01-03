import React, { useEffect } from 'react';
import { useTheme } from '@material-ui/styles';
import throttle from 'lodash/throttle';
import { Theme } from '@theme/types';
import { getBreakpoints } from '@theme/breakpoints';
import { Grid } from '@material-ui/core';
import { DynamicRendering } from '@modules/ui';
import { Paper } from './Calendar.styles';
import { useCalendar } from './CalendarContext';
import { useInjections } from './calendarInjector';

export type CalendarProps = {};

export const Calendar = () => {
  const { Header, Body } = useInjections();
  const {
    setAvailableSteps,
    availableSteps,
    setStep,
    canChangeStep,
  } = useCalendar();
  const theme = useTheme<Theme>();
  const breakpoints = getBreakpoints({ theme });

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (canChangeStep) {
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
    }
  }, [
    breakpoints.values.md,
    breakpoints.values.sm,
    canChangeStep,
    setAvailableSteps,
  ]);

  useEffect(() => {
    if (availableSteps['0'] && !availableSteps['2'] && !availableSteps['4']) {
      setStep(0);
    }
    if (availableSteps['2'] && !availableSteps['4']) {
      setStep(2);
    }
    if (availableSteps['4']) {
      setStep(4);
    }
  }, [availableSteps, setStep]);

  return (
    <Grid container item>
      <DynamicRendering>
        <Paper>
          <Header />
          <Body />
        </Paper>
      </DynamicRendering>
    </Grid>
  );
};
