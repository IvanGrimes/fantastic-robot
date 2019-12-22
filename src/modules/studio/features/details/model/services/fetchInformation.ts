import { Nullable } from '@utils/Nullable';
import { service } from '@modules/services';
import { StudioId } from '../types';
import { PriceType } from '../../../data';

export type FetchInformationInput = { id: StudioId };

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
  photoIds: RawInformationResponse['photoIds'];
  equipmentIds: RawInformationResponse['equipmentIds'];
  stationIds: RawInformationResponse['stationIds'];
  interiorIds: RawInformationResponse['interiorIds'];
  cityId: RawInformationResponse['cityId'];
  description: RawInformationResponse['description'];
  hasOnlinePayment: RawInformationResponse['hasOnlinePayment'];
  priceType: RawInformationResponse['priceType'];
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
    address: RawInformationResponse['address'];
  };
  dressingRoom: {
    has: RawInformationResponse['hasDressingRoom'];
    calendarId: RawInformationResponse['dressingCalendarId'];
    capacity: RawInformationResponse['dressingCapacity'];
  };
};

const getHours = (minutes: number) => minutes / 60;

export const fetchInformation = ({ id }: FetchInformationInput) =>
  service
    .get<RawInformationResponse>(`/api/studio/${id}`)
    .then(({ data }) => data)
    .then<InformationResponse>(
      ({
        id: studioId,
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
        address,
        hasDressingRoom,
        dressingCalendarId,
        dressingCapacity,
        utcZone,
        priceType,
      }) => ({
        id: studioId,
        name,
        photoIds,
        equipmentIds,
        stationIds,
        interiorIds,
        cityId,
        description,
        priceType,
        hasOnlinePayment,
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
          address,
        },
        dressingRoom: {
          has: hasDressingRoom,
          calendarId: dressingCalendarId,
          capacity: dressingCapacity,
        },
      })
    );
