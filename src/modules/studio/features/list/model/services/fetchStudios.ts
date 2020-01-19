import { CityType } from '@modules/studio';
import { fetchFilterStudios } from './fetchFilterStudios';

export type StudiosInput = {
  city: CityType;
  page: number;
};
export const fetchStudios = (params: StudiosInput) =>
  fetchFilterStudios(params);
