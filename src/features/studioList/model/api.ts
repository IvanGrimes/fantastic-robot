import { stringify } from 'qs';
import { FilterStudiosInput } from '../../../controllers/studio/filter';
import { axiosClient } from '../../../lib/axios.client';
import { StudiosInput } from '../../../controllers/studio/list';
import { StudiosResponse } from '../../../controllers/studio/types';

export const fetchStudios = (input: StudiosInput) => {
  return axiosClient
    .get<StudiosResponse>(`/controllers/studio/list?${stringify(input)}`)
    .then(({ data }) => data);
};

export const fetchFilterStudios = (input: FilterStudiosInput) =>
  axiosClient
    .get<StudiosResponse>(`/controllers/studio/filter?${stringify(input)}`)
    .then(({ data }) => data);
