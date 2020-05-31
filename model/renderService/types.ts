import { FunctionComponent } from 'react';
import {
  FailServiceProps,
  InitServiceProps,
  LoadingServiceProps,
  ServiceProps,
  SuccessServiceProps,
} from '../internal';

type NotNull<T> = Diff<T, null | undefined>;

export type InitComponent<
  S extends ServiceProps<any, any, any>,
  C extends {} = {},
  P = Parameters<S['effect']>,
  D = S['data'],
  E = S['error']
> = FunctionComponent<{ service: InitServiceProps<P, D, E> } & C>;

export type LoadingComponent<
  S extends ServiceProps<any, any, any>,
  C extends {} = {},
  P = Parameters<S['effect']>,
  D = NotNull<S['data']>,
  E = S['error']
> = FunctionComponent<
  {
    service: LoadingServiceProps<P, D, E> | SuccessServiceProps<P, D, E>;
  } & C
>;

export type SuccessComponent<
  S extends ServiceProps<any, any, any>,
  C extends {} = {},
  P = Parameters<S['effect']>,
  D = NotNull<S['data']>,
  E = S['error']
> = FunctionComponent<
  {
    service: LoadingServiceProps<P, D, E> | SuccessServiceProps<P, D, E>;
  } & C
>;

export type FailComponent<
  S extends ServiceProps<any, any, any>,
  C extends {} = {},
  P = Parameters<S['effect']>,
  D = S['data'],
  E = NotNull<S['error']>
> = FunctionComponent<{ service: FailServiceProps<P, D, E> } & C>;
