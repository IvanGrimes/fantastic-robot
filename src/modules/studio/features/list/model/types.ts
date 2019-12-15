import { StudioId } from '@modules/studio/features/details';
import { PriceType } from '../../data';
import { StudioItemResponse, StudiosResponse } from './services';

export type Station = {
  id: string;
  name: string;
  line: string;
  color: string;
};

export type StudioType = {
  id: string;
  name: string;
};

export type Image = {
  id: string;
  ratio: number;
};

export type ShortStudio = {
  id: StudioId;
  name: string;
  priceTypes: PriceType;
  stations: Station[];
  types: StudioType[];
  roomsCount: number;
  photos: Image[];
  description: string;
  favorite: boolean;
  lat: number;
  lng: number;
};

export type Studios = Omit<StudiosResponse, 'studios'> & {
  studios: StudioItem[];
};

export type StudioItem = Omit<StudioItemResponse, 'roomNumber'> & {
  roomsCount: StudioItemResponse['roomNumber'];
};
