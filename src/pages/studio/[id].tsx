import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { Wrapper } from './[id].styles';
import { StudioDetails } from '../../features/studioDetails/components';
import {
  fetchReservationsAsync,
  fetchRoomsAsync,
} from '../../features/studioDetails/model/actions';

type Props = typeof dispatchProps;

const dispatchProps = {
  handleFetchReservations: fetchReservationsAsync.request,
  handleFetchRooms: fetchRoomsAsync.request,
};

const _StudioId = ({ handleFetchReservations, handleFetchRooms }: Props) => {
  const { query } = useRouter();

  useEffect(() => {
    const studioId = query.id;

    if (typeof studioId === 'string') {
      handleFetchReservations({ studioId });
      handleFetchRooms({ studioId });
    }
  }, [handleFetchReservations, handleFetchRooms, query.id]);

  return (
    <Wrapper>
      <StudioDetails />
    </Wrapper>
  );
};

export const StudioId = connect(
  null,
  dispatchProps
)(_StudioId);
