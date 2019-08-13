import React from 'react';
import { Store } from 'redux';
import { Container, Grid } from '@material-ui/core';
import {
  fetchFiltersAsync,
  fetchStudiosAsync,
} from '../../redux/studios/actions';
import { RootState } from '../../redux/types';
import { serverEpic } from '../../lib/serverEpic';
import { StudioListFilter } from '../StudioListFilter';
import { StudioList } from '../StudioList';

const _Index = () => (
  <Container>
    <Grid container>
      <Grid item xs={12}>
        <StudioListFilter />
      </Grid>
      <Grid item xs={12}>
        <StudioList />
      </Grid>
    </Grid>
  </Container>
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
