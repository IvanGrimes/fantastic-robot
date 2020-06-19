import { http, ServiceError } from '../../../../model';
import {
  CityId,
  ComfortId,
  EquipmentId,
  EquipmentTypeId,
  FiltersEnum,
  InteriorId,
} from '../types';

type RangeFilterConfig = {
  min: number;
  max: number;
};

type ConfigData = {
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
    [key in FiltersEnum]?: boolean;
  };
  [FiltersEnum.area]: RangeFilterConfig;
  [FiltersEnum.height]: RangeFilterConfig;
  [FiltersEnum.price]: RangeFilterConfig;
};

export const fetchConfig = () =>
  http
    .get<ConfigData>('/api/config')
    .then(({ data }) => data as ConfigData)
    .catch(() => {
      throw new ServiceError('При загрузке конфигурации произошла ошибка');
    });

export type Config = Await<ReturnType<typeof fetchConfig>>;
