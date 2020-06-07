import React from 'react';
import { FailComponent } from '@model';
import { ConfigServiceProps } from '../../config';
import { FiltersProps } from './types';

export const FiltersFail: FailComponent<
  ConfigServiceProps,
  FiltersProps
> = () => <div>filters fail</div>;
