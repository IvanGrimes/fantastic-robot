import React, {
  forwardRef,
  ReactNode,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import { Grid, Typography, Skeleton } from '@components';
import {
  DebouncedTextField,
  DebouncedTextFieldApi,
} from '../DebouncedTextField';
import { Separator } from './DebouncedRange.styles';

export type ChangeEventHandler = (value: string) => void;

export type DebouncedRangeApi = {
  clearWith: ClearRange;
};

type ClearRange = (from: string, to: string) => void;

export const DebouncedRange = forwardRef<
  DebouncedRangeApi,
  {
    isLoading: boolean;
    name: string;
    from: string;
    to: string;
    changeFrom: ChangeEventHandler;
    changeTo: ChangeEventHandler;
    fromLabel: ReactNode;
    toLabel: ReactNode;
  }
>(
  (
    { isLoading, from, to, changeFrom, changeTo, fromLabel, toLabel, name },
    ref
  ) => {
    const fromRef = useRef<null | DebouncedTextFieldApi>(null);
    const toRef = useRef<null | DebouncedTextFieldApi>(null);
    const clearWith = useCallback<ClearRange>((nextFrom, nextTo) => {
      const fromApi = fromRef.current;
      const toApi = toRef.current;

      if (fromApi) {
        fromApi.clearWith(nextFrom);
      }
      if (toApi) {
        toApi.clearWith(nextTo);
      }
    }, []);

    useImperativeHandle(ref, () => ({ clearWith }), [clearWith]);

    return (
      <Grid container spacing={1}>
        <Grid container item>
          <Typography
            variant="caption"
            component="div"
            style={{ width: '100%' }}
          >
            {isLoading ? <Skeleton width="100%" /> : name}
          </Typography>
        </Grid>
        <Grid container alignItems="center" justify="space-between" item xs={5}>
          <DebouncedTextField
            ref={fromRef}
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
            ref={toRef}
            isLoading={isLoading}
            onChange={changeTo}
            value={to}
            label={toLabel}
          />
        </Grid>
      </Grid>
    );
  }
);
