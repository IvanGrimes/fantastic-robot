import { useMemo } from 'react';
import { createEffect, Effect } from 'effector';
import { createStore, useStore } from '../internal';
import {
  State,
  isInit,
  isSuccess,
  isLoading,
  isFail,
  ServiceError,
  ServiceProps,
} from './internal';

export const createService = <
  N extends string,
  S extends () => any,
  D = Await<ReturnType<S>>,
  P = Parameters<S>
>(
  name: N,
  service: S
): {
  useService: () => ServiceProps<P, D, ServiceError>;
  effect: Effect<P, D>;
} => {
  const store = createStore<{
    state: State;
    error: ServiceError | null;
    data: D | null;
  }>(`${name}_service`, {
    state: 'init',
    error: null,
    data: null,
  });
  const effect = createEffect<P, D>({ handler: service });

  store
    .on(effect, (state) => ({
      state: state.data === null ? 'init' : 'loading',
      data: state.data,
      error: null,
    }))
    .on(effect.doneData, (prevState, response) => ({
      ...prevState,
      state: 'success',
      data: response,
    }))
    .on(effect.fail, (prevState, { error: { message } }) => ({
      ...prevState,
      state: 'fail',
      error: new ServiceError(message),
    }))
    .on(effect.failData, (prevState, { message }) => ({
      ...prevState,
      state: 'fail',
      error: new ServiceError(message),
    }));

  return {
    // @ts-ignore
    useService: () => {
      const { state, data, error } = useStore(store);

      return useMemo(
        () => ({
          isInit,
          isLoading,
          isFail,
          isSuccess,
          state,
          data,
          error,
          effect,
        }),
        [data, error, state]
      );
    },
    effect,
  };
};
