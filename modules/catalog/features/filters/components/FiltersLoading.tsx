import React from 'react';
import { LoadingComponent, ConfigServiceProps } from '@model';
import { FiltersStore } from '../model';

export const FiltersLoading: LoadingComponent<
  ConfigServiceProps,
  { filters: FiltersStore }
> = () => <div>filters loading</div>;
