export const getNonEmptyValues = (target: object) =>
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
    .reduce(
      (acc, [prop, value]) => ({
        ...acc,
        [prop]: value,
      }),
      {}
    );
