import { Nullable } from '@utils/Nullable';
import { service } from '@modules/services';
import { StudioId } from '../types';
import { PriceType } from '../../../data';

export type FetchInformationInput = { studioId: StudioId };

type RawInformationResponse = {
  id: string;
  name: string;
  description: string;
  stationIds: string[];
  cityId: string;
  photoIds: string[];
  phone: string;
  vkUrl: Nullable<string>;
  mail: Nullable<string>;
  instUrl: Nullable<string>;
  siteUrl: Nullable<string>;
  address: string;
  interiorIds: string[];
  equipmentIds: string[];
  location: Nullable<{ lat: string; lng: string }>;
  photoExamples: Nullable<string[]>;
  priceType: PriceType;
  roomNumber: number;
  zoneId: number;
  accessToken: string;
  expiresDate: number;
  openMinutes: number;
  closeMinutes: number;
  utcZone: string;
  hasDressingRoom: boolean;
  hasOnlinePayment: boolean;
  dressingCalendarId: Nullable<string>;
  dressingCapacity: Nullable<number>;
};

export type InformationResponse = {
  id: RawInformationResponse['id'];
  name: RawInformationResponse['name'];
  roomsCount: RawInformationResponse['roomNumber'];
  photoIds: RawInformationResponse['photoIds'];
  equipmentIds: RawInformationResponse['equipmentIds'];
  stationIds: RawInformationResponse['stationIds'];
  interiorIds: RawInformationResponse['interiorIds'];
  cityId: RawInformationResponse['cityId'];
  description: RawInformationResponse['description'];
  hasOnlinePayment: RawInformationResponse['hasOnlinePayment'];
  priceType: PriceType;
  workingHours: {
    from: number;
    to: number;
    utc: RawInformationResponse['utcZone'];
  };
  contacts: {
    phone: RawInformationResponse['phone'];
    vk: RawInformationResponse['vkUrl'];
    email: RawInformationResponse['mail'];
    instagram: RawInformationResponse['instUrl'];
    site: RawInformationResponse['siteUrl'];
  };
  dressingRoom: {
    has: RawInformationResponse['hasDressingRoom'];
    calendarId: RawInformationResponse['dressingCalendarId'];
    capacity: RawInformationResponse['dressingCapacity'];
  };
};

const getHours = (minutes: number) => minutes / 60;

export const fetchInformation = ({ studioId }: FetchInformationInput) =>
  service
    .get<RawInformationResponse>(`/api/studio/${studioId}`)
    .then(({ data }) => data)
    .then<InformationResponse>(
      ({
        id,
        name,
        photoIds,
        equipmentIds,
        stationIds,
        interiorIds,
        cityId,
        description,
        hasOnlinePayment,
        openMinutes,
        closeMinutes,
        phone,
        vkUrl,
        mail,
        instUrl,
        siteUrl,
        hasDressingRoom,
        dressingCalendarId,
        dressingCapacity,
        utcZone,
        priceType,
        roomNumber,
      }) => ({
        id,
        name,
        photoIds,
        equipmentIds,
        stationIds,
        interiorIds,
        cityId,
        description,
        priceType: priceType.toString() as PriceType,
        hasOnlinePayment,
        roomsCount: roomNumber,
        workingHours: {
          from: getHours(openMinutes),
          to: getHours(closeMinutes),
          utc: utcZone,
        },
        contacts: {
          phone,
          vk: vkUrl,
          email: mail,
          instagram: instUrl,
          site: siteUrl,
        },
        dressingRoom: {
          has: hasDressingRoom,
          calendarId: dressingCalendarId,
          capacity: dressingCapacity,
        },
      })
    );
