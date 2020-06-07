import React from 'react';
import { LoadingComponent } from '@model';
import { ConfigServiceProps } from '../../config';
import { FiltersProps } from './types';

export const FiltersLoading: LoadingComponent<
  ConfigServiceProps,
  FiltersProps
> = () => <div>filters loading</div>;
