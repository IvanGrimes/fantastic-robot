import React, { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import { useRouter } from 'next/router';
import { InfiniteScrollProps } from './index';

// TODO: add query on every handleNext
// TODO: add Head changing <link rel="next" /> <link rel="prev" />

export const InfiniteScroll = ({
  dataLength,
  hasMore,
  loader,
  endMessage,
  className = '',
  children,
  loadBefore = 20,
  pagination,
  handleNext,
}: InfiniteScrollProps) => {
  if (pagination && (!pagination.route || !pagination.pageNumber)) {
    throw new Error(
      `pagination property should container route: string and pageNumber, but got: [route]: ${pagination.route}, [pageNumber]: ${pagination.pageNumber}`
    );
  }

  const { query, replace } = useRouter();
  const [prevDataLength, setPrevDataLength] = useState(dataLength);
  const [loading, setLoading] = useState(false);
  const getNextRoute = useCallback(() => {
    if (pagination && pagination.route && pagination.pageNumber) {
      const slash = pagination.withTrailingSlash ? '/' : '';
      const number = query.number ? parseInt(query.number as string, 10) : 1;

      return pagination.route.replace(
        pagination.pageNumber,
        (number + 1).toString() + slash
      );
    }

    return '2';
  }, [pagination, query.number]);
  const handleScroll = useCallback(
    debounce(async () => {
      if (loading || !hasMore) return;
      const scrollPosition =
        window.innerHeight + document.documentElement.scrollTop;
      const threshold = scrollPosition * (loadBefore / 100);

      if (
        window.innerHeight + document.documentElement.scrollTop + threshold >
        document.documentElement.offsetHeight
      ) {
        setLoading(true);

        if (pagination && pagination.route) {
          await replace(pagination.route, getNextRoute());
        }

        handleNext();
      }
    }, 100),
    [loading, hasMore, loadBefore, query.number]
  );
  useEffect(() => {
    if (loading && prevDataLength !== dataLength) {
      setPrevDataLength(dataLength);

      setLoading(false);
    }
  }, [dataLength, loading, prevDataLength]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={className}>
      {children}
      {loading && loader}
      {Boolean(!loading && !hasMore) && endMessage}
    </div>
  );
};
