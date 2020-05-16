import { modulesConfig } from '../../model';
import { Filters as Component } from './components';
import { Noop } from '../../components/Noop';

export { filtersStore, updateFilters, changeDisabled } from './internal';

export const Filters = modulesConfig.filters ? Component : Noop;
