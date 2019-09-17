import { NowRequest, NowResponse } from '@now/node/dist';
import { stringify } from 'querystring';
import { axiosServer } from '../../lib/axios.server';
import { CityType } from '../../model/types';

export type StudioFilterableListRequest = {
  city: CityType;
  page: number;
  type?: string[];
  equipments?: string[];
  interiors?: string[];
  name?: string;
  size?: number;
  topLeft?: string;
  bottomRight?: string;
};

export type StudioListResponse = {
  hasNext: boolean;
  list: StudioListItemResponse[];
};

export type StudioListItemResponse = {
  id: string;
  name: string;
  typeIds: string[];
  photoIds: string[];
  stationIds: string[];
  priceType: 1 | 2 | 3;
  location: {
    lon: number;
    lat: number;
  };
};

export default async (req: NowRequest, res: NowResponse) => {
  const data = await axiosServer
    .get<
      Omit<StudioListResponse, 'list'> & {
        studios: StudioListResponse['list'];
      }
    >(`/studio/filter?${stringify(req.query)}`)
    .then(
      response =>
        ({
          hasNext: response.data.hasNext,
          list: response.data.studios,
        } as StudioListResponse)
    );

  res.json(data);
};
