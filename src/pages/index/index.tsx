import React from 'react';
import { Store } from 'redux';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import dynamic from 'next/dynamic';
import { RootState } from '../../model/types';
import { ContentGrid, StudioListGrid } from './index.styles';
import { StudioList } from '../../features/studioList/components';
import { fetchStudiosAsync } from '../../features/studioList/model/actions';
import { setFilters } from '../../features/studioFilters/model/actions';
import { getIsEnabled } from '../../features/studioMapList/model/selectors';
import {
  fetchConfigAsync,
  fetchMetroListAsync,
} from '../../features/studioData/model/actions';
import { parseFilters } from '../../features/studioFilters/utils/parseFilters';

const StudioListMap = dynamic<{}>(() =>
  import('../../features/studioMapList/components').then(
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
  query,
  store,
}) => {
  const appliedFilters = parseFilters(asPath);
  const hasFilters = Boolean(Object.values(appliedFilters).length);
  const pageNumber = parseInt(query.page, 10);
  const page = Number.isNaN(pageNumber) ? 1 : pageNumber;

  store.dispatch(fetchMetroListAsync.request({ city: 'moscow' }));
  store.dispatch(fetchConfigAsync.request());

  if (hasFilters) {
    store.dispatch(setFilters(appliedFilters));
  } else {
    store.dispatch(fetchStudiosAsync.request({ page, city: 'moscow' }));
  }

  return {};
};

const _Index = () => {
  const isMapListEnabled = useSelector(getIsEnabled);

  return (
    <ContentGrid container>
      <StudioListGrid
        item
        xs={12}
        md={12}
        lg={6}
        isMapListEnabled={isMapListEnabled}
      >
        <StudioList listItemVariant={isMapListEnabled ? 'wide' : 'short'} />
      </StudioListGrid>
      <Grid item xs={12} lg={6}>
        <StudioListMap />
      </Grid>
    </ContentGrid>
  );
};

_Index.getInitialProps = getInitialProps;

export const Index = _Index;
