import React, { FunctionComponent, ReactNode } from 'react';
import { Grid, Typography } from '@components';
import { DebouncedTextField } from '../DebouncedTextField';
import { Skeleton } from '@components';
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
}) => {
  return (
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
          fullWidth
        />
      </Grid>
      <Grid container item xs={2} alignItems="center" justify="center">
        <Typography>&mdash;</Typography>
      </Grid>
      <Grid item xs={5}>
        <DebouncedTextField
          isLoading={isLoading}
          onChange={changeTo}
          value={to}
          label={toLabel}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};
