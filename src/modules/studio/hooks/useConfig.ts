import { useMemo } from 'react';

const mergeIdWithConfig = <C extends { id: string; value: any }>(
  listIds: string[] | undefined,
  configList: C[] | [] | undefined
): C[] =>
  listIds && configList
    ? configList.filter(({ id }) => listIds.includes(id))
    : [];

export const useConfig = <C extends { id: string; value: any }>({
  idList,
  configList,
}: {
  idList: string[];
  configList: C[] | [] | undefined;
}) =>
  useMemo(
    () =>
      configList
        ? mergeIdWithConfig<typeof configList[number]>(idList, configList)
        : [],
    [configList, idList]
  );
