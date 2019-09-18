import { FilterStudiosInput } from '../../../controllers/studio/filter';
import { axiosClient } from '../../../lib/axios.client';
import { StudiosInput } from '../../../controllers/studio/list';
import { StudiosResponse } from '../../../controllers/studio/types';

export const fetchStudios = (params: StudiosInput) =>
  axiosClient
    .get<StudiosResponse>(`/controllers/studio/list`, { params })
    .then(({ data }) => data);

export const fetchFilterStudios = (params: FilterStudiosInput) =>
  axiosClient
    .get<StudiosResponse>(`/controllers/studio/filter`, { params })
    .then(({ data }) => data);
