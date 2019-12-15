export const mergeIdWithConfig = <C extends { id: string; value: any }>(
  listIds: string[] | undefined,
  configList: C[] | [] | undefined
): C[] =>
  listIds && configList
    ? configList.filter(({ id }) => listIds.includes(id))
    : [];
