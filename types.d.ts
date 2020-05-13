import { FunctionComponent } from 'react';

declare global {
  type Await<T> = T extends {
    then(onfulfilled?: (value: infer U) => unknown): unknown;
  }
    ? U
    : T;

  type HTMLTag = keyof JSX.IntrinsicElements;

  type ClassName = string;

  type UIComponent<P extends {} = {}> = FunctionComponent<
    {
      className?: ClassName;
      element?: HTMLTag;
    } & P
  >;
}
