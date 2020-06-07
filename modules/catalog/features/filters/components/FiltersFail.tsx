import React from 'react';
import { FailComponent, ConfigServiceProps } from '@model';
import { FiltersProps } from './types';

export const FiltersFail: FailComponent<
  ConfigServiceProps,
  FiltersProps
> = () => <div>filters fail</div>;
