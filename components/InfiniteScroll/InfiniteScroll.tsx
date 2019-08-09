import React, { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import { InfiniteScrollProps } from './index';

// TODO: add query on every handleNext
// TODO: add Head changing <link rel="next" /> <link rel="prev" />

export const InfiniteScroll = ({
  dataLength,
  hasMore,
  handleNext,
  loader,
  endMessage,
  className = '',
  children,
  loadBefore = 20,
}: InfiniteScrollProps) => {
  const [prevDataLength, setPrevDataLength] = useState(dataLength);
  const [loading, setLoading] = useState(false);
  const handleScroll = useCallback(
    debounce(() => {
      if (loading || !hasMore) return;
      const scrollPosition =
        window.innerHeight + document.documentElement.scrollTop;
      const threshold = scrollPosition * (loadBefore / 100);

      if (
        window.innerHeight + document.documentElement.scrollTop + threshold >
        document.documentElement.offsetHeight
      ) {
        setLoading(true);
        handleNext();
      }
    }, 100),
    [loading, hasMore, loadBefore, handleNext]
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
