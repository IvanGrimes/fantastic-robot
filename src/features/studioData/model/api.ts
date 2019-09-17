import { axios } from '../../../lib/axios';
import { ConfigObject, MetroListResponse } from './types';
import { CityType } from '../../../model/types';

export const fetchMetroList = ({ city }: { city: CityType }) =>
  axios
    .get(`/api/metro?cityId=${city}`)
    .then(response => response.data as MetroListResponse);

export const fetchConfig = () =>
  axios
    .get('/api/siteconfig/all')
    .then(response => response.data as ConfigObject);
