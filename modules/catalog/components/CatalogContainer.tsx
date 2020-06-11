import React, { FunctionComponent } from 'react';
import { actions as sharedActions } from '@shared';
import { connect } from 'react-redux';
import { useEffectMount } from '@hooks';
import { Filters } from '../features/filters';
import { List } from '../features/list';

type Props = typeof dispatchProps;

const dispatchProps = {
  fetchConfig: sharedActions.fetchConfigAsync.request,
  fetchMetroList: sharedActions.fetchMetroListAsync.request,
};

const _CatalogContainer: FunctionComponent<Props> = ({
  fetchConfig,
  fetchMetroList,
}) => {
  useEffectMount(() => {
    fetchConfig();
    fetchMetroList();
  });

  return (
    <>
      <Filters />
      <List variant="studio" />
    </>
  );
};

export const CatalogContainer = connect(null, dispatchProps)(_CatalogContainer);
