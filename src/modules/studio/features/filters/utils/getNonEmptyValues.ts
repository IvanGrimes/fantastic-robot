export const getNonEmptyValues = <T extends object>(target: object): T =>
  Object.entries(target)
    .filter(([_, value]) => {
      if (Array.isArray(value)) {
        return Boolean(value.length);
      }
      if (value.toString() === '[object Object]') {
        return Boolean(Object.values(value).length);
      }

      return Boolean(value);
    })
    .reduce<T>(
      (acc, [prop, value]) => ({
        ...acc,
        [prop]: value,
      }),
      {} as T
    );
