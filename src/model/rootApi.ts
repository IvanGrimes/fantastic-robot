import * as studioDataApi from '../features/studioData/model/api';
import * as studioListApi from '../features/studioList/model/api';
import * as studioFiltersApi from '../features/studioFilters/model/api';
import * as dataApi from '../mocks/mockStudios';

export const rootApi = <const>{
  ...studioDataApi,
  ...studioListApi,
  ...studioFiltersApi,
  ...dataApi,
};
