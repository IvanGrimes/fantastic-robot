import React, { FunctionComponent } from 'react';
import { FiltersStore } from '../internal';
import { ConfigServiceProps, renderService } from '../../../model';
import { FiltersLoading } from './FiltersLoading';
import { FiltersFail } from './FiltersFail';
import { FiltersSuccess } from './FiltersSuccess';

export const Filters: FunctionComponent<{
  filters: FiltersStore;
  config: ConfigServiceProps;
}> = ({ config, filters }) => (
  <div>
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
  </div>
);
