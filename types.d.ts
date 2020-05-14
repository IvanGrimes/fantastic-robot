import { FunctionComponent } from 'react';

declare global {
  type Await<T> = T extends {
    then(onfulfilled?: (value: infer U) => unknown): unknown;
  }
    ? U
    : T;

  type HTMLTag = keyof JSX.IntrinsicElements;

  type ClassName = string;

  type UIComponentProps<P extends {} = {}> = {
    className?: ClassName;
    element?: HTMLTag;
  } & P;

  type Diff<T, U> = T extends U ? never : T; // Remove types from T that are assignable to U
}
