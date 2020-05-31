import React from 'react';
import { FailComponent } from '@model';
import { ListService } from './types';

export const ListFail: FailComponent<ListService> = ({ service }) => (
  <div>{service.error.message}</div>
);
