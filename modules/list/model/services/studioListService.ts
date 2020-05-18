import {
  http,
  createService,
  GetPropsFromService,
  Studio,
  StudioEntity,
} from '@model';

const fetchStudioList = () =>
  http
    .get<{ studios: Studio[] }>('/api/studio/filter', {
      params: { city: 1, page: 1, size: 8 },
    })
    .then(({ data }) => data.studios.map((studio) => new StudioEntity(studio)));

export type StudioListServiceProps = GetPropsFromService<
  typeof fetchStudioList
>;

export const studioListService = createService(fetchStudioList);
