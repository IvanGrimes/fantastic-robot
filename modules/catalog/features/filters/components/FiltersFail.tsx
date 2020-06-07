import React from 'react';
import { FailComponent } from '@model';
import { FiltersStore } from '../model';
import { ConfigServiceProps } from '../../config';

export const FiltersFail: FailComponent<
  ConfigServiceProps,
  { filters: FiltersStore }
> = () => <div>filters fail</div>;
