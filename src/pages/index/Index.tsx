import React from 'react';
import { Store } from 'redux';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import dynamic from 'next/dynamic';
import {
  fetchFiltersAsync,
  fetchStudiosAsync,
  setFilters,
} from '../../features/studios/model/actions';
import { RootState } from '../../model/types';
import { serverEpic } from '../../lib/serverEpic';
import { getIsMapVisible } from '../../features/ui/model/selectors';
import { ContentGrid, StudioListGrid } from './Index.styles';
import { StudioList } from '../../features/studios/components/StudioList';
import { parseFilters } from '../../features/studios/components/StudioListFilter/StudioListFilterContainer';

const StudioListMap = dynamic<{}>(() =>
  import('../../features/studios/components/StudioListMap').then(
    module => module.StudioListMap
  )
);

type IndexGetInitialProps = (ctx: {
  page?: number;
  store: Store<RootState>;
  query: { [key: string]: string };
  isServer: boolean;
  asPath: string;
}) => Promise<{}>;

export const getInitialProps: IndexGetInitialProps = async ({
  asPath,
  page = 1,
  store,
}) => {
  const appliedFilters = parseFilters(asPath);
  const hasFilters = Object.values(appliedFilters).length;

  if (hasFilters) {
    store.dispatch(setFilters(appliedFilters));
  }

  await serverEpic(store, fetchStudiosAsync.request({ page }));

  await serverEpic(store, fetchFiltersAsync.request());

  return {};
};

const _Index = () => {
  const isMapVisible = useSelector(getIsMapVisible);

  return (
    <ContentGrid container>
      <StudioListGrid item xs={12} md={12} lg={6} isMapVisible={isMapVisible}>
        <StudioList listItemVariant={isMapVisible ? 'wide' : 'short'} />
      </StudioListGrid>
      <Grid item xs={12} lg={6}>
        <StudioListMap />
      </Grid>
    </ContentGrid>
  );
};

_Index.getInitialProps = getInitialProps;

export const Index = _Index;
