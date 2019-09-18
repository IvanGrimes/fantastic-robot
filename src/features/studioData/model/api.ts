import { axiosClient } from '../../../lib/axios.client';
import { CityType } from '../../../model/types';
import { ConfigObject } from './types';
import { MetroListResponse } from '../../../controllers/metro/list';

export const fetchMetroList = ({ city }: { city: CityType }) =>
  axiosClient
    .get<MetroListResponse>(`/controllers/metro/list`, { params: { city } })
    .then(response => response.data);

export const fetchConfig = () =>
  axiosClient
    .get<ConfigObject>('/controllers/config/list')
    .then(response => response.data);
