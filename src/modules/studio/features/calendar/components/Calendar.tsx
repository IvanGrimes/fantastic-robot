import React, { ComponentProps, useEffect } from 'react';
import { useTheme } from '@material-ui/styles';
import throttle from 'lodash/throttle';
import { Theme } from '@theme/types';
import { getBreakpoints } from '@theme/breakpoints';
import { Grid } from '@material-ui/core';
import * as ui from '@modules/ui';
import { makeInjectable } from '@utils/makeInjectable';
import * as services from '@modules/services';
import { Paper } from './Calendar.styles';
import { useCalendar } from './CalendarContext';
import { Header as _Header } from './Header';
import { RangeNavigation } from './Header/RangeNavigation';
import { DirectionButton } from './Header/RangeNavigation/DirectionButton';
import { ViewRange } from './Header/RangeNavigation/ViewRange';
import { Controls } from './Header/Controls';
import { ClearSelected } from './Header/Controls/ClearSelected';
import { ViewColumn } from './Header/Controls/ViewColumn';
import { Body as _Body } from './Body';
import { WeekDay } from './Body/WeekDay';
import { Row } from './Body/Row';
import { Cell } from './Body/Row/Cell';

export type CalendarProps = ComponentProps<typeof Calendar>;

const { DynamicRendering } = ui

const _Calendar = () => {
  const { isBot } = services.useWithSEO();
  const { Header, Body } = useInjections();
  const { setAvailableSteps, availableSteps, setStep } = useCalendar();
  const theme = useTheme<Theme>();
  const breakpoints = getBreakpoints({ theme });

  // eslint-disable-next-line consistent-return
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
      <DynamicRendering force={isBot}>
        <Paper>
          <Header />
          <Body />
        </Paper>
      </DynamicRendering>
    </Grid>
  );
};

export const { Component: Calendar, useInjections } = makeInjectable({
  Header: _Header,
  RangeNavigation,
  DirectionButton,
  ViewRange,
  Controls,
  ClearSelected,
  ViewColumn,
  Body: _Body,
  WeekDay,
  Row,
  Cell,
})(_Calendar);
