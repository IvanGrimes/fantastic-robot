import React from 'react';
import { SuccessComponent, ConfigServiceProps } from '../../../model';
import { FiltersStore, updateFilters } from '../internal';

export const FiltersSuccess: SuccessComponent<
  ConfigServiceProps,
  { filters: FiltersStore }
> = ({ filters }) => (
  <div
    style={{
      height: '10px',
      width: '10px',
      backgroundColor: filters.values?.hasOnlineBooking ? 'green' : 'red',
      userSelect: 'none',
    }}
    onClick={
      filters.disabled
        ? undefined
        : () =>
            updateFilters({
              hasOnlineBooking: !filters.values?.hasOnlineBooking,
            })
    }
  >
    hasOnlineBooking
  </div>
);
