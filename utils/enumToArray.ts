export const enumToArray = <T extends { [key: string]: any }>(target: T) =>
  Object.values<T[string]>(target);
