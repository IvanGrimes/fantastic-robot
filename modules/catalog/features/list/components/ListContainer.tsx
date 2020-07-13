import React, { FunctionComponent, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { routes } from '@utils';
import { List } from './List';
import { actions, selectors } from '../model';
import * as filtersFeature from '../../filters';
import { ListVariantEnum } from '../../../model';

type OwnProps = {
  variant: ListVariantEnum;
};

type Props = ReturnType<typeof mapStateToProps> &
  typeof dispatchProps &
  OwnProps;

const mapStateToProps = (state: RootState, { variant }: OwnProps) => {
  const isStudio = variant === ListVariantEnum.studio;

  return {
    isListLoading: isStudio
      ? selectors.getStudioListLoading(state)
      : selectors.getRoomListLoading(state),
    hasNextList: isStudio
      ? selectors.getHasNextStudioList(state)
      : selectors.getHasNextRoomList(state),
    studioList: isStudio
      ? selectors.getStudioList(state)
      : selectors.getRoomList(state),
    error: isStudio
      ? selectors.getStudioListError(state)
      : selectors.getRoomListError(state),
    filters: filtersFeature.selectors.getFilters(state),
  };
};

const dispatchProps = {
  fetchStudioList: actions.fetchStudioListAsync.request,
  fetchRoomList: actions.fetchRoomListAsync.request,
};

const _ListContainer: FunctionComponent<Props> = ({
  fetchStudioList,
  isListLoading,
  hasNextList,
  studioList,
  error,
  filters,
  fetchRoomList,
  variant,
}) => {
  const { query, route } = useRouter();
  const wasRequestedListRef = useRef(false);
  const parsedPage = Number(route === routes.list.route ? query.page : 1);

  useEffect(() => {
    const wasRequestedList = wasRequestedListRef.current;
    const fetcher =
      variant === ListVariantEnum.studio ? fetchStudioList : fetchRoomList;

    if (!wasRequestedList) {
      if (route === routes.list.route) {
        if (Number.isInteger(parsedPage)) {
          fetcher({
            page: parsedPage,
            ...filters,
          });
        }
      } else {
        fetcher({ page: undefined, ...filters });
      }
    }
  }, [fetchRoomList, fetchStudioList, filters, parsedPage, route, variant]);

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
