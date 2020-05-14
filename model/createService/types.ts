import { Effect } from 'effector';
import { ServiceError } from './internal';

export type State = InitState | LoadingState | SuccessState | FailState;

type InitState = 'init';
type LoadingState = 'loading';
type SuccessState = 'success';
type FailState = 'fail';

export type BaseServiceProps<P, D, E> = {
  name: string;
  isInit: typeof isInit;
  isLoading: typeof isLoading;
  isSuccess: typeof isSuccess;
  isFail: typeof isFail;
  effect: Effect<P, D, E>;
};

export type InitServiceProps<P, D, E> = {
  state: InitState;
  data: null;
  error: null;
} & BaseServiceProps<P, D, E>;

export type LoadingServiceProps<P, D, E> = {
  state: LoadingState;
  data: null;
  error: null;
} & BaseServiceProps<P, D, E>;

export type SuccessServiceProps<P, D, E> = {
  state: SuccessState;
  data: D;
  error: null;
} & BaseServiceProps<P, D, E>;

export type FailServiceProps<P, D, E> = {
  state: FailState;
  data: null;
  error: E;
} & BaseServiceProps<P, D, E>;

export type GetPropsFromService<
  S extends () => any,
  P = Parameters<S>,
  D = Await<ReturnType<S>>,
  E = ServiceError
> = ServiceProps<P, D, E>;

export type ServiceProps<P, D, E> =
  | InitServiceProps<P, D, E>
  | LoadingServiceProps<P, D, E>
  | SuccessServiceProps<P, D, E>
  | FailServiceProps<P, D, E>;

export function isInit<
  S extends ServiceProps<any, any, any> = ServiceProps<any, any, any>,
  P = Parameters<S['effect']>,
  D = S['data'],
  E = S['error']
>(props: ServiceProps<P, D, E>): props is InitServiceProps<P, D, E> {
  return props.state === 'init';
}

export function isLoading<
  S extends ServiceProps<any, any, any> = ServiceProps<any, any, any>,
  P = Parameters<S['effect']>,
  D = S['data'],
  E = S['error']
>(props: ServiceProps<P, D, E>): props is LoadingServiceProps<P, D, E> {
  return props.state === 'loading';
}

export function isSuccess<
  S extends ServiceProps<any, any, any> = ServiceProps<any, any, any>,
  P = Parameters<S['effect']>,
  D = S['data'],
  E = S['error']
>(props: ServiceProps<P, D, E>): props is SuccessServiceProps<P, D, E> {
  return props.state === 'success';
}

export function isFail<
  S extends ServiceProps<any, any, any> = ServiceProps<any, any, any>,
  P = Parameters<S['effect']>,
  D = S['data'],
  E = S['error']
>(props: ServiceProps<P, D, E>): props is FailServiceProps<P, D, E> {
  return props.state === 'fail';
}
