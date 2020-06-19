import { http, ServiceError } from '@shared';
import { Studio } from '../../../../model';

export type StudioList = {
  roomIds?: string[];
  matchingRoomIds?: string[];
  studio: Studio;
}[];

export const fetchStudioList = () =>
  http
    .post<{ studios: StudioList }>('/api/studio/filter', {
      city: 1,
      page: 1,
      size: 9,
    })
    .then(({ data }) => data.studios)
    .catch(() => {
      throw new ServiceError(
        'При загрузке списка студий произошла ошибка, пожалуйста, попробуйте позднее.'
      );
    });

export type StudioListService = Await<ReturnType<typeof fetchStudioList>>;
