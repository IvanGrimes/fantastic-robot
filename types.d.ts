type Await<T> = T extends {
  then(onfulfilled?: (value: infer U) => unknown): unknown;
}
  ? U
  : T;

type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any
  ? A
  : never;
