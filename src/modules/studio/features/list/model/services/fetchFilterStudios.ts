import { StudioId } from '@modules/studio/features/details';
import { CityType } from '@modules/studio';
import { service } from '@modules/services';
import { PriceType } from '../../../data';

export type StudiosResponse = {
  hasNext: boolean;
  studios: StudioItemResponse[];
};

export type StudioItemResponse = {
  id: StudioId;
  name: string;
  interiorIds: string[];
  photoIds: string[];
  stationIds: string[];
  priceType: '1' | '2' | '3';
  roomNumber: number;
  location: {
    lon: number;
    lat: number;
  };
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
    .get<StudiosResponse>(`/api/studio/filter`, {
      params: { cityId, ...query },
    })
    .then(({ data }) => data);
};
