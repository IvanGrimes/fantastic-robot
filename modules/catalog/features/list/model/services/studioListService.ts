import { http, createService, GetPropsFromService } from '@model';
import { Studio, StudioEntity } from '../entities';

const fetchStudioList = () =>
  http
    .post<{ studios: Studio[] }>('/api/studio/filter', {
      city: 1,
      page: 1,
      size: 9,
    })
    .then(({ data }) => data.studios.map((studio) => new StudioEntity(studio)));

export type StudioListServiceProps = GetPropsFromService<
  typeof fetchStudioList
>;

export const studioListService = createService('studioList', fetchStudioList);
