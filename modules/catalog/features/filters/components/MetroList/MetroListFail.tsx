import React from 'react';
import { FailComponent, MetroServiceProps } from '@model';
import { MetroListProps } from './types';

export const MetroListFail: FailComponent<
  MetroServiceProps,
  MetroListProps
> = () => <div>metro-list fail</div>;
