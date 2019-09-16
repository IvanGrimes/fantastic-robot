import { axios } from '../../../lib/axios';
import { MetroListResponse } from './types';
import { CityType } from '../../../model/types';

export const fetchMetroList = ({ city }: { city: CityType }) =>
  axios.get(`/api/metro?cityId=${city}`).then(response => {
    return response.data as MetroListResponse;
  });
