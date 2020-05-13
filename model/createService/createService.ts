import { createEffect } from 'effector';
import { createStore, useStore } from '../internal';
import {
  ServiceProps,
  State,
  isInit,
  isSuccess,
  isLoading,
  isFail,
  ServiceError,
} from './internal';

export const createService = <
  S extends () => any,
  D = Await<ReturnType<S>>,
  P = Parameters<S>
>(
  service: S
): { use: () => ServiceProps<P, D, ServiceError> } => {
  const { name } = service;
  const state = createStore<State>(`${name}_state`, 'init');
  const data = createStore<D | null>(`${name}_data`, null);
  const error = createStore<ServiceError | null>(`${name}_error`, null);
  const effect = createEffect<P, D, ServiceError>({ handler: service });

  state
    .on(effect, () => 'loading')
    .on(effect.doneData, () => 'success')
    .on(effect.failData, () => 'fail');

  data.on(effect, () => null).on(effect.doneData, (_, response) => response);

  error
    .on(effect, () => null)
    .on(effect.fail, (_, { error: { message } }) => new ServiceError(message));

  return {
    // @ts-ignore
    use: () => {
      return {
        isInit,
        isLoading,
        isFail,
        isSuccess,
        // eslint-disable-next-line react-hooks/rules-of-hooks
        state: useStore(state),
        // eslint-disable-next-line react-hooks/rules-of-hooks
        data: useStore(data),
        // eslint-disable-next-line react-hooks/rules-of-hooks
        error: useStore(error),
        effect,
      };
    },
  };
};
