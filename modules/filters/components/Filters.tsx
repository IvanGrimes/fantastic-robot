import React, { FunctionComponent } from 'react';
import { FiltersStore, updateFilters } from '../internal';

export const Filters: FunctionComponent<{ filters: FiltersStore }> = ({
  filters,
}) => {
  return (
    <div>
      <div>filters</div>
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
    </div>
  );
};
