import React, { FunctionComponent } from 'react';
import { actions as sharedActions, FiltersEnum } from '@shared';
import { connect } from 'react-redux';
import { useEffectMount } from '@hooks';
import { Filters } from '../features/filters';
import { List } from '../features/list';
import { getFilters } from '../features/filters/model/selectors';

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  filters: getFilters(state),
});

const dispatchProps = {
  fetchConfig: sharedActions.fetchConfigAsync.request,
  fetchMetroList: sharedActions.fetchMetroListAsync.request,
};

const _CatalogContainer: FunctionComponent<Props> = ({
  fetchConfig,
  fetchMetroList,
  filters,
}) => {
  useEffectMount(() => {
    fetchConfig();
    fetchMetroList();
  });

  return (
    <>
      <Filters />
      <List variant={filters[FiltersEnum.list]} />
    </>
  );
};

export const CatalogContainer = connect(
  mapStateToProps,
  dispatchProps
)(_CatalogContainer);
