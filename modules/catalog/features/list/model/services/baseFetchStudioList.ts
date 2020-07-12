import { http, ServiceError } from '@shared';
import { Studio } from '../../../../model';

export type StudioList = {
  roomIds?: string[];
  matchingRoomIds?: string[];
  studio: Studio;
}[];

export const baseFetchStudioList = ({
  page = 1,
  size = 9,
}: {
  page?: number;
  size?: number;
} = {}) =>
  http
    .post<{ studios: StudioList }>('/api/studio/filter', {
      city: 1,
      page,
      size,
    })
    .then(({ data }) => data.studios)
    .catch(() => {
      throw new ServiceError(
        'При загрузке списка студий произошла ошибка, пожалуйста, попробуйте позднее.'
      );
    });
