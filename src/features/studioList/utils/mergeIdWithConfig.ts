export const mergeIdWithConfig = <C extends { id: string; value: any }>(
  listIds: string[],
  configList: C[] | []
): { [key: string]: Omit<C, 'id'> } =>
  listIds
    ? configList
        .filter(({ id }) => listIds.includes(id))
        .reduce(
          (acc, { id, ...configItem }) => ({
            ...acc,
            [id]: configItem,
          }),
          {}
        )
    : {};
