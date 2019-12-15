import { axiosClient } from '@lib/axios.client';
import { ConfigObject } from '../types';

export type ConfigObjectResponse = {
  [key in ConfigObjectPropertyResponse]: ConfigObjectValueResponse[] | [];
};

export type ConfigObjectPropertyResponse = 'context' | 'equipment' | 'interior';

export type ConfigObjectValueResponse = { id: string; value: string };

export const fetchConfig = () =>
  axiosClient
    .get<ConfigObject>('/api/siteconfig/all')
    .then(response => response.data);
