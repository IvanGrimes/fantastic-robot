import React from 'react';
import { Store } from 'redux';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import {
  fetchFiltersAsync,
  fetchStudiosAsync,
} from '../../features/studios/model/actions';
import { RootState } from '../../model/types';
import { serverEpic } from '../../lib/serverEpic';
import { StudioListMap } from '../../features/studios/components/StudioListMap';
import { getIsMapVisible } from '../../features/ui/model/selectors';
import { ContentGrid, StudioList } from './Index.styles';

const _Index = () => {
  const isMapVisible = useSelector(getIsMapVisible);

  return (
    <ContentGrid container>
      <Grid item xs={12} md={12} lg={isMapVisible ? 6 : 12}>
        <StudioList listItemVariant={isMapVisible ? 'wide' : 'short'} />
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
        style={
          isMapVisible
            ? {}
            : {
                display: 'none',
              }
        }
      >
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
