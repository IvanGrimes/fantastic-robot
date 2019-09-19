import { NowRequest, NowResponse } from '@now/node/dist';
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
  const { city, ...query } = req.query;

  const data = await axiosServer
    .get<StudiosResponse>(`/studio/filter`, {
      params: { cityId: city, ...query },
    })
    .then(response => response.data)
    .then(({ studios, ...rest }) => ({
      studios: studios.map(({ roomNumber, ...studio }) => ({
        roomsCount: roomNumber,
        ...studio,
      })),
      ...rest,
    }));

  res.json(data);
};
