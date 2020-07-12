import { baseFetchStudioList } from './baseFetchStudioList';

export const fetchStudioList = () => baseFetchStudioList();

export type StudioListService = Await<ReturnType<typeof fetchStudioList>>;
