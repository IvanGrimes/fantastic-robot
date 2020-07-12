import { baseFetchStudioList } from './baseFetchStudioList';

export const fetchStudioNextList = ({ page }: { page: number }) =>
  baseFetchStudioList({ page });

export type StudioNextListParameters = Parameters<
  typeof fetchStudioNextList
>[number];

export type StudioNextListService = Await<
  ReturnType<typeof fetchStudioNextList>
>;
