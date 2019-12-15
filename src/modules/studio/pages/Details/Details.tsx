import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { withSEO } from '@HOC/withSEO';
import { Layout } from '@features/ui';
import { Wrapper } from './Details.styles';
import { Details as DetailsComponent } from '../../features/details';
import {
  fetchReservationsAsync,
  fetchRoomsAsync,
} from '../../features/details/model/actions';

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
    <Layout>
      <Wrapper>
        <DetailsComponent />
      </Wrapper>
    </Layout>
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
