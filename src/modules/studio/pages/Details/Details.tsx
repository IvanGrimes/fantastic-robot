import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { withSEO } from '@modules/services/HOC/withSEO';
import { Layout } from '@modules/ui/components';
import { Wrapper } from './Details.styles';
import { Details as DetailsComponent } from '../../features/details';
import {
  fetchInformationAsync,
  fetchReservationsAsync,
  fetchRoomsAsync,
} from '../../features/details/model/actions';

type Props = typeof dispatchProps & { isBot: boolean };

const dispatchProps = {
  handleFetchReservations: fetchReservationsAsync.request,
  handleFetchRooms: fetchRoomsAsync.request,
  handleFetchInformation: fetchInformationAsync.request,
};

const _Details = ({
  handleFetchReservations,
  handleFetchRooms,
  handleFetchInformation,
  isBot,
}: Props) => {
  const { query } = useRouter();

  useEffect(() => {
    const studioId = query.id;

    if (typeof studioId === 'string' && !isBot) {
      handleFetchReservations({ studioId });
      handleFetchRooms({ studioId });
      handleFetchInformation({ id: studioId });
    }
  }, [
    handleFetchInformation,
    handleFetchReservations,
    handleFetchRooms,
    isBot,
    query.id,
  ]);

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
    () => fetchInformationAsync.request({ id: query.id as string }),
  ])(_Details)
);
