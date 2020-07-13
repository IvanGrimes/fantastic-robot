import React, { FunctionComponent, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { routes } from '@utils';
import { List } from './List';
import { selectors, actions } from '../model';
import * as filtersFeature from '../../filters';

type Props = ReturnType<typeof mapStateToProps> &
  typeof dispatchProps & {
    variant: 'studio' | 'room';
  };

const mapStateToProps = (state: RootState) => ({
  isListLoading: selectors.getListLoading(state),
  hasNextList: selectors.getHasNextList(state),
  studioList: selectors.getStudioList(state),
  error: selectors.getListError(state),
  filters: filtersFeature.selectors.getFilters(state),
});

const dispatchProps = {
  fetchStudioList: actions.fetchStudioListAsync.request,
};

const _ListContainer: FunctionComponent<Props> = ({
  fetchStudioList,
  isListLoading,
  hasNextList,
  studioList,
  error,
  filters,
}) => {
  const { query, route } = useRouter();
  const wasRequestedListRef = useRef(false);
  const parsedPage = Number(route === routes.list.route ? query.page : 1);

  useEffect(() => {
    const wasRequestedList = wasRequestedListRef.current;

    if (!wasRequestedList) {
      if (route === routes.list.route) {
        if (Number.isInteger(parsedPage)) {
          fetchStudioList({
            page: parsedPage,
            ...filters,
          });
        }
      } else {
        fetchStudioList({ page: undefined, ...filters });
      }
    }
  }, [fetchStudioList, filters, parsedPage, route]);

  return (
    <List
      isLoading={isListLoading}
      list={studioList}
      error={error}
      hasNext={hasNextList}
      page={parsedPage}
    />
  );
};

export const ListContainer = connect(
  mapStateToProps,
  dispatchProps
)(_ListContainer);
