import React, { useCallback, Fragment, useMemo } from 'react';
import { Store } from 'redux';
import { Container, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { fetchStudiosAsync } from '../../redux/data/actions';
import { RootState } from '../../redux/types';
import { serverEpic } from '../../lib/serverEpic';
import { getStudios, getStudiosError } from '../../redux/data/selectors';
import { StudioList } from '../StudioList';
import { InfiniteScrollLoader, InfiniteScroll } from './Index.styles';

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  studios: getStudios(state),
  errors: getStudiosError(state),
});

const dispatchProps = {
  fetchStudio: fetchStudiosAsync.request,
};

const _Index = ({ studios, errors, fetchStudio }: Props) => {
  const { query } = useRouter();
  const number = useMemo(
    () => (query.number ? parseInt(query.number as string, 10) : 1),
    [query.number]
  );
  const handleNext = useCallback(() => {
    fetchStudio({
      page: number + 1,
    });
  }, [fetchStudio, number]);

  return (
    <Container>
      <Head>
        {number !== 1 ? (
          <Fragment>
            <link rel="prev" href={`/page/${number - 1}`} />
            <link rel="next" href={`/page/${number + 1}`} />
          </Fragment>
        ) : (
          <link rel="next" href="/page/2" />
        )}
      </Head>
      <Grid container>
        <InfiniteScroll
          dataLength={studios.list.length}
          handleNext={handleNext}
          loader={<InfiniteScrollLoader />}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          pagination={{
            route: '/page/[number]',
            pageNumber: '[number]',
            withTrailingSlash: true,
          }}
          hasMore
        >
          <StudioList list={studios.list} error={errors.networkError} />
        </InfiniteScroll>
      </Grid>
    </Container>
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

  return {};
};

export const Index = connect(
  mapStateToProps,
  dispatchProps
)(_Index);
