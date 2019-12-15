import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { Wrapper } from './Details.styles';
import { StudioDetails } from '../../features/details/components';
import {
  fetchReservationsAsync,
  fetchRoomsAsync,
} from '../../features/details/model/actions';
import { withSEO } from '../../../../HOC/withSEO';

type Props = typeof dispatchProps & { isBot: boolean };

const dispatchProps = {
  handleFetchReservations: fetchReservationsAsync.request,
  handleFetchRooms: fetchRoomsAsync.request,
};

const _Details = ({
  handleFetchReservations,
  handleFetchRooms,
  isBot,
}: Props) => {
  const { query } = useRouter();

  useEffect(() => {
    const studioId = query.id;

    if (typeof studioId === 'string' && !isBot) {
      handleFetchReservations({ studioId });
      handleFetchRooms({ studioId });
    }
  }, [handleFetchReservations, handleFetchRooms, isBot, query.id]);

  return (
    <Wrapper>
      <StudioDetails />
    </Wrapper>
  );
};

export const Details = connect(
  null,
  dispatchProps
)(
  withSEO(({ query }) => [
    () => fetchRoomsAsync.request({ studioId: query.id as string }),
  ])(_Details)
);
