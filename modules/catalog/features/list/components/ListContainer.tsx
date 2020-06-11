import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffectMount } from '@hooks';
import { List } from './List';
import { selectors, actions } from '../model';

export const ListContainer: FunctionComponent<{
  variant: 'studio' | 'room';
}> = () => {
  const dispatch = useDispatch();
  const isListLoading = useSelector(selectors.getListLoading);
  const studioList = useSelector(selectors.getStudioList);

  useEffectMount(() => {
    dispatch(actions.fetchStudioListAsync.request());
  });

  return <List isLoading={isListLoading} list={studioList} />;
};
