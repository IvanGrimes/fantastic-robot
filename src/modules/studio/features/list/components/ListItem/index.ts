import * as data from '../../../data';
import { StudioItem } from '../../model/types';

export * from './ListItem';

export type ListItemVariant = 'wide' | 'short';

export type ListItemPersist = {
  variant: ListItemVariant;
  metroList: ReturnType<typeof data.selectors.getMetroList>;
  isMetroListLoading: ReturnType<typeof data.selectors.getMetroListLoading>;
  config: ReturnType<typeof data.selectors.getConfig>;
  isConfigLoading: ReturnType<typeof data.selectors.getConfigLoading>;
  loading: boolean;
};

export type ListItemProps = ListItemPersist & StudioItem & { loading: boolean };
