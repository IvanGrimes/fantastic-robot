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
    photoIds: PhotoId[];
    priceType: PriceType;
    roomNumber: number;
    site: string;
    stationIds: StationId[];
    utcZone: string;
    vk: string;
  };
};

const name = 'studio';

export class StudioEntity extends Entity<typeof name, Studio> {
  constructor(data: Studio) {
    super(name, data);
  }

  hasMatchingRooms = () => Boolean(this.getData().matchingRoomIds);

  getId = () => this.getData().studio.id;
}
