import { ListMapSwitchContainer } from './ListMapSwitchContainer';
import { featuresConfig } from '../../../../../config';

export const ListMapSwitch = featuresConfig.studioListMap
  ? ListMapSwitchContainer
  : () => null;
