import { modulesConfig } from '@model';
import { List as Component } from './internal';
import { Noop } from '../../../../components/Noop';

export { listStore } from './internal';

export const List = modulesConfig.catalog.list ? Component : Noop;
