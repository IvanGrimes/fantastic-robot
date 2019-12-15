export const mergeIdWithConfig = <C extends { id: string; value: any }>(
  listIds: string[] | undefined,
  configList: C[] | [] | undefined
): { [key: string]: Omit<C, 'id'> } =>
  listIds && configList
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
