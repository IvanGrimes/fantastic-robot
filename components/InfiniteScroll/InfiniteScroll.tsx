import React, { FunctionComponent, ReactElement } from 'react';
import ReactInfiniteScroller from 'react-infinite-scroller';

export type InfiniteScrollProps = {
  className?: string;
  page?: number;
  fetchNext: (page: number) => void;
  hasNext: boolean;
  loader: ReactElement;
  children: ReactElement;
  element?: HTMLTag;
};

export const InfiniteScroll: FunctionComponent<InfiniteScrollProps> = ({
  className = '',
  page = 0,
  fetchNext,
  hasNext,
  loader,
  children,
  element = 'div',
}) => (
  <ReactInfiniteScroller
    className={className}
    element={element}
    pageStart={page}
    loadMore={fetchNext}
    initialLoad={false}
    hasMore={hasNext}
    loader={loader}
  >
    {children}
  </ReactInfiniteScroller>
);
