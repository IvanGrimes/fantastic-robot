import { Entity } from '@model';
import {
  CityId,
  ComfortId,
  EquipmentId,
  EquipmentTypeId,
  InteriorId,
} from '../../../list';
import { FiltersEnum } from '../../../filters';

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
    [key in FiltersEnum]: boolean;
  };
  [FiltersEnum.area]: RangeFilterConfig;
  [FiltersEnum.height]: RangeFilterConfig;
  [FiltersEnum.price]: RangeFilterConfig;
};

const name = 'config';

export class ConfigEntity extends Entity<typeof name, Config> {
  constructor(data: Config) {
    super(name, data);
  }
}
