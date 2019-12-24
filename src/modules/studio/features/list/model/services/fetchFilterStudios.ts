import { StudioId } from '@modules/studio/features/details';
import { CityType } from '@modules/studio';
import { service } from '@modules/services';
import { PriceType } from '../../../data';

type StudioRawResponse = {
  hasNext: boolean;
  studios: StudioItemRawResponse[];
};

type StudioItemRawResponse = {
  id: StudioId;
  name: string;
  interiorIds: string[];
  photoIds: string[];
  stationIds: string[];
  priceType: PriceType;
  roomNumber: number;
  location: {
    lon: number;
    lat: number;
  };
};

export type StudiosResponse = {
  hasNext: boolean;
  studios: StudioItemResponse[];
};

export type StudioItemResponse = Omit<StudioItemRawResponse, 'roomNumber'> & {
  roomsCount: number;
};

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

export const fetchFilterStudios = (params: FilterStudiosInput) => {
  const { city: cityId, ...query } = params;

  return service
    .get<StudioRawResponse>(`/api/studio/filter`, {
      params: { cityId, ...query },
    })
    .then(({ data }) => data)
    .then<StudiosResponse>(({ studios, ...data }) => ({
      studios: studios.map(({ roomNumber, priceType, ...studio }) => ({
        roomsCount: roomNumber,
        priceType: priceType.toString() as PriceType,
        ...studio,
      })),
      ...data,
    }));
};
