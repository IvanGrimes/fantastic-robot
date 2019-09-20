import React, { Fragment, memo, useCallback, useMemo } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { RootState } from '../../../model/types';
import { StudioList } from './StudioList';
import { StudioListProps } from './index';
import { fetchStudiosAsync } from '../model/actions';
import {
  getHasNext,
  getStudios,
  getStudiosError,
  getStudiosLoading,
  getFilterStudiosLoading,
} from '../model/selectors';
import {
  getIsFullscreen,
  getIsEnabled,
} from '../../studioMapList/model/selectors';

type StudioListContainerProps = ReturnType<typeof mapStateToProps> &
  typeof dispatchProps &
  StudioListProps;

const mapStateToProps = (state: RootState) => ({
  studios: getStudios(state),
  errors: getStudiosError(state),
  loading: getStudiosLoading(state),
  isFiltering: getFilterStudiosLoading(state),
  isMapListEnabled: getIsEnabled(state),
  isMapListFullscreen: getIsFullscreen(state),
  hasNext: getHasNext(state),
});

const dispatchProps = {
  handleFetchStudio: fetchStudiosAsync.request,
};

const _StudioListContainer = ({
  className = '',
  studios,
  errors,
  handleFetchStudio,
  loading,
  isFiltering,
  listItemVariant,
  isMapListEnabled,
  isMapListFullscreen,
  hasNext,
}: StudioListContainerProps) => {
  const { query } = useRouter();
  const pageNumber = useMemo(
    () => (query.number ? parseInt(query.number as string, 10) : 1),
    [query.number]
  );
  const handleNext = useCallback(() => {
    handleFetchStudio({
      city: 'moscow',
      page: pageNumber + 1,
    });
  }, [handleFetchStudio, pageNumber]);

  return (
    <Fragment>
      <Head>
        {pageNumber !== 1 ? (
          <Fragment>
            <link rel="prev" href={`/page/${pageNumber - 1}`} />
            <link rel="next" href={`/page/${pageNumber + 1}`} />
          </Fragment>
        ) : (
          <link rel="next" href="/page/2" />
        )}
      </Head>
      <StudioList
        className={className}
        list={studios}
        error={errors.networkError}
        loading={(pageNumber === 1 && loading) || isFiltering}
        listItemVariant={listItemVariant}
        isMapListEnabled={isMapListEnabled}
        isMapListFullscreen={isMapListFullscreen}
        handleNext={handleNext}
        hasNext={hasNext}
      />
    </Fragment>
  );
};

export const StudioListContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_StudioListContainer, dequal));
