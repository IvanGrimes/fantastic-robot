import React from 'react';
import { createStore as createEffectorStore, Store } from 'effector';

export { useStore } from 'effector-react';

const KEY = '__PRELOADED_EFFECTOR_STATE__';
const storage: { [key: string]: Store<any> } = {};
const loaded = false;

declare global {
  interface Window {
    // eslint-disable-next-line no-undef
    [KEY]: Store<any>;
  }
}

const parseState = () => {
  if (!loaded) {
    const state = typeof window === 'undefined' ? false : window[KEY];

    if (state) {
      // eslint-disable-next-line no-unused-expressions
      document.querySelector(`#${KEY}`)?.remove();

      Object.entries(state).forEach(([name, store]) => {
        storage[name] = createEffectorStore(store, { name });
      });

      delete window[KEY];
    }
  }
};

export function createStore<S>(name: string, state: S): Store<S> {
  parseState();

  if (!storage[name]) {
    const store = createEffectorStore(state, { name });

    storage[name] = store;

    return store;
  }

  return storage[name];
}

createStore.renderToString = () => (
  <script
    id={KEY}
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html: `window.${KEY} = ${JSON.stringify(
        Object.entries(storage).reduce(
          (acc, [name, store]) => ({
            ...acc,
            [name.toString()]: store.getState(),
          }),
          {}
        )
      )}`,
    }}
  />
);
