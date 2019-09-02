import * as studioListApi from '../features/studioList/model/api';
import * as studioFiltersApi from '../features/studioFilters/model/api';
import * as dataApi from '../features/studios/model/api';

export const rootApi = <const>{
  ...studioListApi,
  ...studioFiltersApi,
  ...dataApi,
};
