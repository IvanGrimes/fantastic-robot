import React, { useCallback } from 'react';
import { Store } from 'redux';
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchStudiosAsync } from '../redux/data/actions';
import { RootState } from '../redux/types';
import { serverEpic } from '../lib/serverEpic';
import { getStudios, getStudiosError } from '../redux/data/selectors';
import { StudioList } from '../components/StudioList';
import {
  InfiniteScrollGrid,
  InfiniteScroll,
  InfiniteScrollLoader,
} from '../components/index';

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  studios: getStudios(state),
  errors: getStudiosError(state),
});

const dispatchProps = {
  fetchStudio: fetchStudiosAsync.request,
};

const Index = ({ studios, errors, fetchStudio }: Props) => {
  const handleNext = useCallback(() => {
    fetchStudio({ first: studios.length + 1, last: studios.length + 5 });
  }, [fetchStudio, studios.length]);

  return (
    <Container>
      <InfiniteScrollGrid container item>
        <InfiniteScroll
          dataLength={studios.length}
          next={handleNext}
          loader={<InfiniteScrollLoader />}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          hasMore
        >
          <StudioList list={studios} error={errors.networkError} />
        </InfiniteScroll>
      </InfiniteScrollGrid>
    </Container>
  );
};

Index.getInitialProps = async ({ store }: { store: Store<RootState> }) => {
  await serverEpic(store, fetchStudiosAsync.request({ first: 0, last: 5 }));

  return {};
};

export default connect(
  mapStateToProps,
  dispatchProps
)(Index);
