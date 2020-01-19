import * as studio from '@modules/studio';
import { ListMapSwitchContainer } from './ListMapSwitchContainer';

export const ListMapSwitch = studio.listMap.enabled
  ? ListMapSwitchContainer
  : () => null;
