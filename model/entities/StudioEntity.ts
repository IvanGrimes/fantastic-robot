import { Entity } from './internal';
import {
  ComfortId,
  EquipmentId,
  PhotoId,
  PriceType,
  StationId,
} from '../internal';

export type Studio = {
  roomIds: string[];
  matchingRoomIds?: string[];
  studio: {
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
};

const name = 'studio';

const defaultData: Studio = {
  roomIds: [],
  studio: {
    photos: [],
    id: '',
    cityId: '',
    address: '',
    closeMinutes: 0,
    comfortIds: [],
    description: '1',
    equipmentIds: [],
    hasDressingRoom: false,
    hasOnlinePayment: false,
    instagram: '',
    location: {
      lat: 0,
      lon: 0,
    },
    mail: '',
    name: '1',
    openMinutes: 0,
    priceType: 1,
    roomNumber: 0,
    site: '',
    stationIds: [],
    utcZone: '',
    vk: '',
  },
};

export class StudioEntity extends Entity<typeof name, Studio> {
  constructor(data?: Studio) {
    super(name, data || defaultData);
  }

  hasMatchingRooms = () => Boolean(this.getData().matchingRoomIds);

  getId = () => this.getData().studio.id;
}
