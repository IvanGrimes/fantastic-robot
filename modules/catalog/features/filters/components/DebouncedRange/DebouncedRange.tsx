import React, { FunctionComponent, ReactNode } from 'react';
import { Grid, Typography, Skeleton } from '@components';
import { DebouncedTextField } from '../DebouncedTextField';
import { Separator } from './DebouncedRange.styles';

export type ChangeEventHandler = (value: string) => void;

export const DebouncedRange: FunctionComponent<{
  isLoading: boolean;
  name: string;
  from: string;
  to: string;
  changeFrom: ChangeEventHandler;
  changeTo: ChangeEventHandler;
  fromLabel: ReactNode;
  toLabel: ReactNode;
}> = ({
  isLoading,
  from,
  to,
  changeFrom,
  changeTo,
  fromLabel,
  toLabel,
  name,
}) => (
  <Grid container spacing={1}>
    <Grid container item>
      <Typography variant="caption" component="div" style={{ width: '100%' }}>
        {isLoading ? <Skeleton width="100%" /> : name}
      </Typography>
    </Grid>
    <Grid container alignItems="center" justify="space-between" item xs={5}>
      <DebouncedTextField
        isLoading={isLoading}
        onChange={changeFrom}
        value={from}
        label={fromLabel}
      />
    </Grid>
    <Grid container item xs={2} alignItems="center" justify="center">
      <Separator disabled={isLoading}>&mdash;</Separator>
    </Grid>
    <Grid item xs={5}>
      <DebouncedTextField
        isLoading={isLoading}
        onChange={changeTo}
        value={to}
        label={toLabel}
      />
    </Grid>
  </Grid>
);
