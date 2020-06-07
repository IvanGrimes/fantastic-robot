import React from 'react';
import { LoadingComponent, MetroServiceProps } from '@model';
import { MetroListProps } from './types';

export const MetroListLoading: LoadingComponent<
  MetroServiceProps,
  MetroListProps
> = () => <div>metro-list loading</div>;
