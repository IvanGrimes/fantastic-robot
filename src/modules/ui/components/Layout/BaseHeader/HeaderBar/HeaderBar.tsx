import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import { ListFilter } from '@modules/studio/features/filters/components';
import { ListMapSwitch } from './ListMapSwitch';
import { BaseHeaderBar, BaseHeaderBarProps } from '../../BaseHeaderBar';

export type HeaderBarProps = Omit<BaseHeaderBarProps, 'children'>;

const _HeaderBar = ({ show }: HeaderBarProps) => (
  <BaseHeaderBar show={show}>
    <Grid container alignItems="center" justify="space-between">
      <Grid item>
        <ListFilter />
      </Grid>
      <ListMapSwitch />
    </Grid>
  </BaseHeaderBar>
);

export const HeaderBar = memo(_HeaderBar);