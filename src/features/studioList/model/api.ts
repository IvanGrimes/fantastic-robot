import { from } from 'rxjs';
import { stringify } from 'qs';
import { FilterStudiosInput } from '../../../controllers/studio/filter';
import { axiosClient } from '../../../lib/axios.client';
import { StudiosInput } from '../../../controllers/studio/list';
import { StudiosResponse } from '../../../controllers/studio/types';

export const fetchStudios = (input: StudiosInput) =>
  axiosClient
    .get<StudiosResponse>(`/controllers/list?${stringify(input)}`)
    .then(({ data }) => data);

export const fetchFilterStudios = (input: FilterStudiosInput) =>
  axiosClient
    .get<StudiosResponse>(`/controllers/filter?${stringify(input)}`)
    .then(({ data }) => data);

export const toggleFavorite = (id: string) =>
  from(
    new Promise<{ id: string; success: boolean }>(resolve => {
      setTimeout(() => {
        resolve({ id, success: true });
      }, 1000);
    }).then(({ id: _id, success }) => {
      if (!success) {
        throw new Error('Fail');
      }

      return { id: _id };
    })
  );
