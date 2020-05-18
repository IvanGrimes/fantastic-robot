import React, { FunctionComponent } from 'react';
import { FiltersStore } from '../internal';
import { ConfigServiceProps, renderService } from '@model';
import { FiltersLoading } from './FiltersLoading';
import { FiltersFail } from './FiltersFail';
import { FiltersSuccess } from './FiltersSuccess';
import { Grid } from '@components';

export const Filters: FunctionComponent<{
  filters: FiltersStore;
  config: ConfigServiceProps;
}> = ({ config, filters }) => (
  <Grid item xs={3}>
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
