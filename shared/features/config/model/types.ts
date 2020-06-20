export type CityId = string;
export type ComfortId = string;
export type EquipmentTypeId = string;
export type EquipmentId = string;
export type InteriorId = string;
export type PhotoId = string;
export type PriceType = 1 | 2 | 3;
export type StationId = string;

export enum FiltersEnum {
  sort = 'sort',
  area = 'area',
  city = 'city',
  comfort = 'comfort',
  date = 'date',
  equipment = 'equipment',
  hasOnlineBooking = 'hasOnlineBooking',
  height = 'height',
  interior = 'interior',
  price = 'price',
  textSearch = 'textSearch',
  metro = 'metro',
}
