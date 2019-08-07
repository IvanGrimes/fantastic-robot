import React, { useEffect } from 'react';
import { Store } from 'redux';
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchStudiosAsync } from '../redux/data/actions';
import { RootState } from '../redux/types';
import { serverEpic } from '../lib/serverEpic';
import {
  getStudios,
  getStudiosError,
  getStudiosLoading,
} from '../redux/data/selectors';
import { StudioList } from '../components/StudioList';

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  studios: getStudios(state),
  loading: getStudiosLoading(state),
  errors: getStudiosError(state),
});

const dispatchProps = {
  fetchStudio: fetchStudiosAsync.request,
};

const Index = ({ studios, loading, errors, fetchStudio }: Props) => {
  useEffect(() => {
    fetchStudio({ first: studios.length + 1, last: studios.length + 5 });
  }, []);

  return (
    <Container>
      <StudioList
        list={studios}
        loading={loading}
        error={errors.networkError}
      />
    </Container>
  );
};

Index.getInitialProps = async ({ store }: { store: Store<RootState> }) => {
  await serverEpic(store, fetchStudiosAsync.request({ first: 0, last: 4 }));

  return {};
};

export default connect(
  mapStateToProps,
  dispatchProps
)(Index);
