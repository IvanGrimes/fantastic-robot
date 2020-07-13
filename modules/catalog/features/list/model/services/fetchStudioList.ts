import { http, ServiceError } from '@shared';
import { Studio } from '../../../../model';
import { FiltersState } from '../../../filters';
import { transformFilters } from './transformFilters';

export type StudioList = {
  roomIds?: string[];
  matchingRoomIds?: string[];
  studio: Studio;
}[];

export const fetchStudioList = ({
  page,
  ...filters
}: { page?: number } & FiltersState) => {
  const f = transformFilters(filters);

  return http
    .post<{ studios: StudioList }>('/api/studio/filter', {
      city: 1,
      page,
      size: 15,
      ...f,
    })
    .then(({ data }) => data.studios)
    .catch(() => {
      throw new ServiceError(
        'При загрузке списка студий произошла ошибка, пожалуйста, попробуйте позднее.'
      );
    });
};

export type StudioListParameters = Parameters<typeof fetchStudioList>[number];

export type StudioListService = Await<ReturnType<typeof fetchStudioList>>;
