import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { useEffectMount } from '@hooks';
import { List } from './List';
import { selectors, actions } from '../model';

type Props = ReturnType<typeof mapStateToProps> &
  typeof dispatchProps & {
    variant: 'studio' | 'room';
  };

const mapStateToProps = (state: RootState) => ({
  isListLoading: selectors.getListLoading(state),
  isNextListLoading: selectors.getNextListLoading(state),
  hasNextList: selectors.getHasNextList(state),
  studioList: selectors.getStudioList(state),
  error: selectors.getListError(state),
});

const dispatchProps = {
  fetchStudioList: actions.fetchStudioListAsync.request,
  fetchNext: actions.fetchStudioNextListAsync.request,
};

const _ListContainer: FunctionComponent<Props> = ({
  fetchStudioList,
  isListLoading,
  isNextListLoading,
  hasNextList,
  studioList,
  error,
  fetchNext,
}) => {
  useEffectMount(() => {
    fetchStudioList();
  });

  return (
    <List
      isLoading={isListLoading}
      isNextLoading={isNextListLoading}
      list={studioList}
      error={error}
      fetchNext={fetchNext}
      hasNext={hasNextList}
    />
  );
};

export const ListContainer = connect(
  mapStateToProps,
  dispatchProps
)(_ListContainer);
