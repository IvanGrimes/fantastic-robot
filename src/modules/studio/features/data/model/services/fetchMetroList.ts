import { axiosClient } from '@lib/axios.client';
import { CityType } from '@modules/studio';

export type MetroListResponse = MetroLineResponse[];

export type MetroLineResponse = {
  id: string;
  // eslint-disable-next-line camelcase
  hex_color: string;
  name: string;
  stations: MetroStationResponse[];
};

export type MetroStationResponse = {
  id: string;
  order: number;
  name: string;
  lat: number;
  lng: number;
};

export const fetchMetroList = ({ city }: { city: CityType }) =>
  axiosClient
    .get<MetroListResponse>(`/api/metro`, { params: { cityId: city } })
    .then(response => response.data);
