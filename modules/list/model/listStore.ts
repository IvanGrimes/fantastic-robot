import { createStore, modulesConfig } from '@model';

export type ListStore = {
  enabled: boolean;
};

export const listStore = createStore<ListStore>('list', {
  enabled: modulesConfig.list,
});
