import React from 'react';
import { SuccessComponent } from '@model';
import { FiltersStore, updateFilters } from '../internal';
import { ConfigServiceProps } from '../../config';

export const FiltersSuccess: SuccessComponent<
  ConfigServiceProps,
  { filters: FiltersStore }
> = ({ filters }) => (
  <button
    type="button"
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
  </button>
);
