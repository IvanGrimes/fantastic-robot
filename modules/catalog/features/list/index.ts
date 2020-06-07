import { modulesConfig } from '@model';
import { Noop } from '@components';
import { List as Component } from './internal';

export { listStore } from './internal';

export const List = modulesConfig.catalog.list ? Component : Noop;
