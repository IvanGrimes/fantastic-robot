import React from 'react';
import { LoadingComponent } from '@model';
import { FiltersStore } from '../model';
import { ConfigServiceProps } from '../../config';

export const FiltersLoading: LoadingComponent<
  ConfigServiceProps,
  { filters: FiltersStore }
> = () => <div>filters loading</div>;
