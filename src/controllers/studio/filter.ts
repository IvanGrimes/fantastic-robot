import { NowRequest, NowResponse } from '@now/node/dist';
import { stringify } from 'querystring';
import { axiosServer } from '../../lib/axios.server';
import { StudiosResponse } from './types';
import { CityType } from '../../model/types';
import { PriceType } from '../../features/studioData/model/types';

export type FilterStudiosInput = {
  city: CityType;
  page: number;
  equipments?: string[];
  interiors?: string[];
  name?: string;
  size?: number;
  topLeft?: string;
  bottomRight?: string;
  stations?: string[];
  priceTypes?: PriceType[];
};

export default async (req: NowRequest, res: NowResponse) => {
  const { city: cityId, ...query } = req.query;
  const params = { cityId, ...query };
  const data = await axiosServer
    .get<StudiosResponse>(`/studio/filter?${stringify(params)}`)
    .then(response => response.data);

  res.json(data);
};
