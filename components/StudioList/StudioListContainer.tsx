import React, { Fragment, memo, useCallback, useMemo } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { RootState } from '../../redux/types';
import {
  getIsStudiosFiltering,
  getStudios,
  getStudiosError,
  getStudiosLoading,
} from '../../redux/studios/selectors';
import { StudioList } from './StudioList';
import { InfiniteScroll, InfiniteScrollLoader } from '../index/Index.styles';
import { fetchStudiosAsync } from '../../redux/studios/actions';

export type StudioListContainerProps = ReturnType<typeof mapStateToProps> &
  typeof dispatchProps & {
    className?: string;
  };

const mapStateToProps = (state: RootState) => ({
  studios: getStudios(state),
  errors: getStudiosError(state),
  loading: getStudiosLoading(state),
  isFiltering: getIsStudiosFiltering(state),
});

const dispatchProps = {
  fetchStudio: fetchStudiosAsync.request,
};

const _StudioListContainer = ({
  className = '',
  studios,
  errors,
  fetchStudio,
  loading,
  isFiltering,
}: StudioListContainerProps) => {
  const { query } = useRouter();
  const number = useMemo(
    () => (query.number ? parseInt(query.number as string, 10) : 1),
    [query.number]
  );
  const handleNext = useCallback(() => {
    fetchStudio({
      page: number + 1,
    });
  }, [fetchStudio, number]);

  return (
    <Fragment>
      <Head>
        {number !== 1 ? (
          <Fragment>
            <link rel="prev" href={`/page/${number - 1}`} />
            <link rel="next" href={`/page/${number + 1}`} />
          </Fragment>
        ) : (
          <link rel="next" href="/page/2" />
        )}
      </Head>
      <InfiniteScroll
        dataLength={studios.list.length}
        handleNext={handleNext}
        loader={<InfiniteScrollLoader />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        pagination={{
          route: '/page/[number]',
          pageNumber: '[number]',
          withTrailingSlash: true,
        }}
        hasMore
      >
        <StudioList
          className={className}
          list={studios.list}
          error={errors.networkError}
          loading={loading && isFiltering}
        />
      </InfiniteScroll>
    </Fragment>
  );
};

export const StudioListContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_StudioListContainer, dequal));
