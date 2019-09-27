import { fetchFilterStudios } from './fetchFilterStudios';
import { CityType } from '../../../../model/types';

export type StudiosInput = {
  city: CityType;
  page: number;
};
export const fetchStudios = (params: StudiosInput) =>
  fetchFilterStudios(params);
