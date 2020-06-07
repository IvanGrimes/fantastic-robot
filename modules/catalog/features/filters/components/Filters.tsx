import React, { FunctionComponent } from 'react';
import { renderService, ConfigServiceProps } from '@model';
import { Grid } from '@components';
import { FiltersStore, UpdateFilters } from '../internal';
import { FiltersLoading } from './FiltersLoading';
import { FiltersFail } from './FiltersFail';
import { FiltersSuccess } from './FiltersSuccess';
import { GridPaper } from './Filters.styles';

export const Filters: FunctionComponent<{
  filters: FiltersStore;
  updateFilters: UpdateFilters;
  config: ConfigServiceProps;
}> = ({ config, updateFilters, filters }) => (
  <Grid item md={3} lg={2} component={GridPaper} variant="outlined" square>
    {renderService(
      config,
      { filters, updateFilters },
      {
        Loading: FiltersLoading,
        Fail: FiltersFail,
        Success: FiltersSuccess,
      }
    )}
  </Grid>
);
