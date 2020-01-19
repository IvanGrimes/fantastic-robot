import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import * as studio from '@modules/studio';
import { ListMapSwitch } from './ListMapSwitch';
import { BaseHeaderBar, BaseHeaderBarProps } from '../../BaseHeaderBar';

export type HeaderBarProps = Omit<BaseHeaderBarProps, 'children'>;

const { filters: { ListFilter } } = studio

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
