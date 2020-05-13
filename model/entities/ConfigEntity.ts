import { Entity } from './internal';
import {
  CityId,
  ComfortId,
  EquipmentId,
  EquipmentTypeId,
  Filters,
  InteriorId,
} from '../internal';

type RangeFilterConfig = {
  min: number;
  max: number;
};

export type Config = {
  cities: {
    id: CityId;
    name: string;
  }[];
  comforts: {
    id: ComfortId;
    name: string;
  }[];
  equipmentTypes: {
    id: EquipmentTypeId;
    name: string;
  }[];
  equipments: {
    id: EquipmentId;
    name: string;
  }[];
  interiors: {
    id: InteriorId;
    name: string;
  }[];
  filters: {
    [key in Filters]: boolean;
  };
  [Filters.area]: RangeFilterConfig;
  [Filters.height]: RangeFilterConfig;
  [Filters.price]: RangeFilterConfig;
};

export class ConfigEntity extends Entity<Config> {
  constructor(data: Config) {
    super('config', data);
  }
}
