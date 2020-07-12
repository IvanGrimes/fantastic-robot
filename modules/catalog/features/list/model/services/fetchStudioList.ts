import { baseFetchStudioList } from './baseFetchStudioList';

export const fetchStudioList = () => baseFetchStudioList({ page: 1 });

export type StudioListService = Await<ReturnType<typeof fetchStudioList>>;
