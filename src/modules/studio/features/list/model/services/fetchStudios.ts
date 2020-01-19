import { CityType } from '../../../../model/types';
import { fetchFilterStudios } from './fetchFilterStudios';

export type StudiosInput = {
  city: CityType;
  page: number;
};
export const fetchStudios = (params: StudiosInput) =>
  fetchFilterStudios(params);
