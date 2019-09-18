import * as studioDataApi from '../features/studioData/model/api';
import * as studioListApi from '../features/studioList/model/api';

export const rootApi = <const>{
  ...studioDataApi,
  ...studioListApi,
};
