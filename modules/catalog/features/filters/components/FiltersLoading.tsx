import React from 'react';
import { LoadingComponent, ConfigServiceProps } from '@model';
import { FiltersProps } from './types';

export const FiltersLoading: LoadingComponent<
  ConfigServiceProps,
  FiltersProps
> = () => <div>filters loading</div>;
