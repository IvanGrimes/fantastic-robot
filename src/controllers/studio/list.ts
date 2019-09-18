import { CityType } from '../../model/types';
import FilterStudios from './filter';

export type StudiosInput = {
  city: CityType;
  page: number;
};

export default FilterStudios;
