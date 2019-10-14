export type Mapping<T> = (v: T) => T;

export abstract class Monad<T> {
  abstract get value(): T;

  abstract flatMap: (f: Mapping<T>) => Monad<T>;
}
