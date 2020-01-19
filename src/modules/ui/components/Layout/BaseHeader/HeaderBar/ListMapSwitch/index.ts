import { listMap } from '@modules/studio';
import { ListMapSwitchContainer } from './ListMapSwitchContainer';

export const ListMapSwitch = listMap.enabled
  ? ListMapSwitchContainer
  : () => null;
