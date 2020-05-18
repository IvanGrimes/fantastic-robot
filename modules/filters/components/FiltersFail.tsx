import React from 'react';
import { ConfigServiceProps, FailComponent } from '@model';
import { FiltersStore } from '../model';

export const FiltersFail: FailComponent<
  ConfigServiceProps,
  { filters: FiltersStore }
> = () => <div>filters fail</div>;
