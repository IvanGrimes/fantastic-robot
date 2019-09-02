import React, { Fragment, memo, useCallback, useMemo } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { RootState } from '../../../model/types';
import { StudioList } from './StudioList';
import { StudioListProps } from './index';
import { fetchStudiosAsync, toggleFavoriteAsync } from '../model/actions';
import {
  getIsStudiosFiltering,
  getStudios,
  getStudiosError,
  getStudiosLoading,
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
  isFiltering: getIsStudiosFiltering(state),
  isMapListEnabled: getIsEnabled(state),
  isMapListFullscreen: getIsFullscreen(state),
});

const dispatchProps = {
  handleFetchStudio: fetchStudiosAsync.request,
  handleToggleFavorite: toggleFavoriteAsync.request,
};

const _StudioListContainer = ({
  className = '',
  studios,
  errors,
  handleFetchStudio,
  loading,
  isFiltering,
  listItemVariant,
  handleToggleFavorite,
  isMapListEnabled,
  isMapListFullscreen,
}: StudioListContainerProps) => {
  const { query } = useRouter();
  const number = useMemo(
    () => (query.number ? parseInt(query.number as string, 10) : 1),
    [query.number]
  );
  const handleNext = useCallback(() => {
    handleFetchStudio({
      page: number + 1,
    });
  }, [handleFetchStudio, number]);

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
      <StudioList
        className={className}
        list={studios.list}
        error={errors.networkError}
        loading={loading && isFiltering}
        listItemVariant={listItemVariant}
        handleToggleFavorite={handleToggleFavorite}
        isMapListEnabled={isMapListEnabled}
        isMapListFullscreen={isMapListFullscreen}
        handleNext={handleNext}
      />
    </Fragment>
  );
};

export const StudioListContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_StudioListContainer, dequal));
