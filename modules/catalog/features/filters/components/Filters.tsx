import React, { FunctionComponent } from 'react';
import { renderService } from '@model';
import { Grid } from '@components';
import { FiltersStore } from '../internal';
import { ConfigServiceProps } from '../../config';
import { FiltersLoading } from './FiltersLoading';
import { FiltersFail } from './FiltersFail';
import { FiltersSuccess } from './FiltersSuccess';

export const Filters: FunctionComponent<{
  filters: FiltersStore;
  config: ConfigServiceProps;
}> = ({ config, filters }) => (
  <Grid item xs={2}>
    <div>filters</div>
    {renderService(
      config,
      { filters },
      {
        Loading: FiltersLoading,
        Fail: FiltersFail,
        Success: FiltersSuccess,
      }
    )}
  </Grid>
);
