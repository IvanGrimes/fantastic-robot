import { service } from '@modules/services';
import { ConfigObject } from '../types';

export type ConfigObjectResponse = {
  [key in ConfigObjectPropertyResponse]: ConfigObjectValueResponse[] | [];
};

export type ConfigObjectPropertyResponse = 'context' | 'equipment' | 'interior';

export type ConfigObjectValueResponse = { id: string; value: string };

export const fetchConfig = () =>
  service
    .get<ConfigObject>('/api/siteconfig/all')
    .then(response => response.data);
