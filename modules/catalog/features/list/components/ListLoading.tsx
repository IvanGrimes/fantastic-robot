import React from 'react';
import { LoadingComponent } from '@model';
import { ListService } from './types';
import { ListSuccess } from './ListSuccess';

export const ListLoading: LoadingComponent<ListService> = ({ service }) => (
  <ListSuccess service={service} />
);
