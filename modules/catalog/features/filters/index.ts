import { modulesConfig } from '@model';
import { Noop } from '@components';
import { Filters as Component } from './components';

export {
  filtersStore,
  updateFilters,
  changeDisabled,
  clearFilters,
} from './internal';

export const Filters = modulesConfig.catalog.filters ? Component : Noop;
