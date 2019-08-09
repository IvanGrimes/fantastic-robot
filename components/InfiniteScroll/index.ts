import { ReactNode } from 'react';

export type InfiniteScrollProps = {
  className?: string;
  children: ReactNode | ReactNode[];
  dataLength: number;
  hasMore: boolean;
  handleNext: (...args: any[]) => void;
  loader?: ReactNode;
  endMessage?: ReactNode;
  loadBefore?: number;
};

export { InfiniteScroll } from './InfiniteScroll';
