import { Entity } from './Entity';

export type Studio = {
  roomIds: string[];
  matchingRoomIds?: string[];
  studio: {
    address: string;
    cityId: string;
    closeMinutes: number;
    openMinutes: number;
    description: string;
    equipmentIds: string[];
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
    photoIds: string[];
    priceType: 1 | 2 | 3;
    roomNumber: number;
    site: string;
    stationIds: string[];
    utcZone: string;
    vk: string;
  };
};

export class StudioEntity extends Entity<Studio> {
  hasMatchingRooms = (): boolean => Boolean(this.getData().matchingRoomIds);
}
