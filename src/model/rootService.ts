import * as studioDataApi from '../features/studioData/model/services';
import * as studioListApi from '../features/studioList/model/services';

export const rootService = <const>{
  ...studioDataApi,
  ...studioListApi,
};
