import React, { Fragment, memo, useCallback, useMemo } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { RootState } from '@model/types';
import { List } from './List';
import { ListProps } from './index';
import { fetchStudiosAsync } from '../model/actions';
import {
  getHasNext,
  getStudios,
  getStudiosError,
  getStudiosLoading,
  getFilterStudiosLoading,
} from '../model/selectors';
import * as listMap from '../../list-map';
import * as filters from '../../filters';
import * as data from '../../data';

type ListContainerProps = ReturnType<typeof mapStateToProps> &
  typeof dispatchProps &
  ListProps;

const mapStateToProps = (state: RootState) => ({
  studios: getStudios(state),
  errors: getStudiosError(state),
  loading: getStudiosLoading(state),
  isFiltering: getFilterStudiosLoading(state),
  isMapListEnabled: listMap.selectors.getIsEnabled(state),
  isMapListFullscreen: listMap.selectors.getIsFullscreen(state),
  hasNext: getHasNext(state),
  hasFilters: filters.selectors.getHasFilters(state),
  metroList: data.selectors.getMetroList(state),
  isMetroListLoading: data.selectors.getMetroListLoading(state),
  config: data.selectors.getConfig(state),
  isConfigLoading: data.selectors.getConfigLoading(state),
});

const dispatchProps = {
  handleFetchStudio: fetchStudiosAsync.request,
};

const _ListContainer = ({
  className = '',
  studios,
  errors,
  handleFetchStudio,
  loading,
  isFiltering,
  variant,
  isMapListEnabled,
  isMapListFullscreen,
  hasNext,
  hasFilters,
  metroList,
  isMetroListLoading,
  isConfigLoading,
  config,
}: ListContainerProps) => {
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
      <List
        className={className}
        list={studios}
        error={errors.networkError}
        loading={hasFilters ? isFiltering : loading}
        variant={variant}
        isMapListEnabled={isMapListEnabled}
        isMapListFullscreen={isMapListFullscreen}
        handleNext={handleNext}
        hasNext={hasNext}
        metroList={metroList}
        isMetroListLoading={isMetroListLoading}
        isConfigLoading={isConfigLoading}
        config={config}
      />
    </Fragment>
  );
};

export const ListContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_ListContainer, dequal));
