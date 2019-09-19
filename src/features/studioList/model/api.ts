import { FilterStudiosInput } from '../../../controllers/studio/filter';
import { axiosClient } from '../../../lib/axios.client';
import { StudiosInput } from '../../../controllers/studio/list';
import {
  StudioItemResponse,
  StudiosResponse,
} from '../../../controllers/studio/types';

export type Studios = Omit<StudiosResponse, 'studios'> & {
  studios: StudioItem[];
};

export type StudioItem = Omit<StudioItemResponse, 'roomNumber'> & {
  roomsCount: StudioItemResponse['roomNumber'];
};

export const fetchStudios = (params: StudiosInput) =>
  axiosClient
    .get<Studios>(`/controllers/studio/list`, { params })
    .then(({ data }) => data);

export const fetchFilterStudios = (params: FilterStudiosInput) =>
  axiosClient
    .get<Studios>(`/controllers/studio/filter`, { params })
    .then(({ data }) => data);
