import React from 'react';
import { Store } from 'redux';
import { Grid } from '@material-ui/core';
import {
  fetchFiltersAsync,
  fetchStudiosAsync,
} from '../../features/studios/model/actions';
import { RootState } from '../../model/types';
import { serverEpic } from '../../lib/serverEpic';
import { StudioList } from '../../features/studios/components/StudioList';

const _Index = () => (
  <Grid container>
    <Grid item xs={12}>
      <StudioList />
    </Grid>
  </Grid>
);

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
