import {
  ComfortId,
  EquipmentId,
  FiltersEnum,
  InteriorId,
  PhotoId,
  PriceType,
  StationId,
} from '@shared';

export type Studio = {
  address: string;
  cityId: string;
  closeMinutes: number;
  openMinutes: number;
  description: string;
  equipmentIds: EquipmentId[];
  comfortIds: ComfortId[];
  hasDressingRoom: boolean;
  hasOnlinePayment: boolean;
  id: string;
  instagram: string;
  location: {
    lon: number;
    lat: number;
  };
  mail: string;
  name: string;
  photos: {
    imageId: PhotoId;
    description: string;
  }[];
  priceType: PriceType;
  roomNumber: number;
  site: string;
  stationIds: StationId[];
  utcZone: string;
  vk: string;
};

export type Room = {
  id: string;
  name: string;
  description: string | null;
  studio: Studio;
  photoIds: PhotoId[];
  photoExamples: PhotoId[];
  interiorIds: InteriorId[];
  minimalPrice: number;
  [FiltersEnum.area]: number;
  [FiltersEnum.height]: number;
};

export enum ListVariantEnum {
  studio = 'studio',
  room = 'room',
}
