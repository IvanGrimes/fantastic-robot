import React from 'react';
import { Store } from 'redux';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import dynamic from 'next/dynamic';
import {
  fetchFiltersAsync,
  fetchStudiosAsync,
} from '../../features/studios/model/actions';
import { RootState } from '../../model/types';
import { serverEpic } from '../../lib/serverEpic';
import { getIsMapVisible } from '../../features/ui/model/selectors';
import { ContentGrid, StudioListGrid } from './Index.styles';
import { StudioList } from '../../features/studios/components/StudioList';

const StudioListMap = dynamic<{}>(() =>
  import('../../features/studios/components/StudioListMap').then(
    module => module.StudioListMap
  )
);

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

_Index.getInitialProps = async ({
  store,
}: {
  store: Store<RootState>;
  query: { [key: string]: string };
  isServer: boolean;
}) => {
  await serverEpic(store, fetchStudiosAsync.request({ page: 1 }));

  await serverEpic(store, fetchFiltersAsync.request());

  return {};
};

export const Index = _Index;
