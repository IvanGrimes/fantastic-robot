import { ComponentType, FunctionComponent } from 'react';

declare global {
  type Await<T> = T extends {
    then(onfulfilled?: (value: infer U) => unknown): unknown;
  }
    ? U
    : T;

  type HTMLTag = keyof JSX.IntrinsicElements;

  type ClassName = string;

  type StyleableComponent<P extends {} = {}> = ComponentType<
    {
      className?: ClassName;
    } & P
  >;

  type Diff<T, U> = T extends U ? never : T; // Remove types from T that are assignable to U
}
