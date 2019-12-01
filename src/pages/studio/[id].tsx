import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Wrapper } from './[id].styles';
import { StudioDetails } from '../../features/studioDetails/components';
import { StudioId as StudioIdType } from '../../model/types';
import {
  fetchReservationsAsync,
  fetchRoomsAsync,
} from '../../features/studioDetails/model/actions';
import { SSRError } from '../../lib/SSRError';

type Props = typeof dispatchProps & { id: string };

type GetInitialProps = {
  query: { id?: StudioIdType };
};

const dispatchProps = {
  handleFetchReservations: fetchReservationsAsync.request,
  handleFetchRooms: fetchRoomsAsync.request,
};

const getInitialProps = async ({ query }: GetInitialProps) => {
  if (!query.id) {
    throw new SSRError({ statusCode: 404 });
  }

  return { id: query.id };
};

const _StudioId = ({
  id,
  handleFetchReservations,
  handleFetchRooms,
}: Props) => {
  useEffect(() => {
    handleFetchReservations({ studioId: id });
    handleFetchRooms({ studioId: id });
  }, [handleFetchReservations, handleFetchRooms, id]);

  return (
    <Wrapper>
      <StudioDetails />
    </Wrapper>
  );
};

_StudioId.getInitialProps = getInitialProps;

export const StudioId = connect(
  null,
  dispatchProps
)(_StudioId);
