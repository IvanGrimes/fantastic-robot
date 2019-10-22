import React from 'react';
import { Store } from 'redux';
import { Wrapper } from './[id].styles';
import { StudioDetails } from '../../features/studioDetails/components';
import { RootState, StudioId as StudioIdType } from '../../model/types';
import {
  fetchReservationsAsync,
  fetchRoomsAsync,
} from '../../features/studioDetails/model/actions';
import { SSRError } from '../../lib/SSRError';

type GetInitialProps = {
  store: Store<RootState>;
  query: { id?: StudioIdType };
};

const getInitialProps = async ({ store, query }: GetInitialProps) => {
  if (query.id) {
    store.dispatch(fetchRoomsAsync.request({ studioId: query.id }));
    store.dispatch(fetchReservationsAsync.request({ studioId: query.id }));
  } else {
    throw new SSRError({ statusCode: 404 });
  }

  return {};
};

export const StudioId = () => (
  <Wrapper>
    <StudioDetails />
  </Wrapper>
);

StudioId.getInitialProps = getInitialProps;
