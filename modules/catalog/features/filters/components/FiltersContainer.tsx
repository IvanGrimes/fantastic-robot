import React, { FunctionComponent } from 'react';
import { selectors as sharedSelectors } from '@shared';
import { connect } from 'react-redux';
import { useEffectMount } from '@hooks';
import { Filters } from './Filters';
import { selectors, actions } from '../model';

export type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  filters: selectors.getFilters(state),
  configError: sharedSelectors.getConfigError(state),
  isConfigLoading: sharedSelectors.getConfigLoading(state),
  config: sharedSelectors.getConfig(state),
  metroListError: sharedSelectors.getMetroListError(state),
  isMetroListLoading: sharedSelectors.getMetroListLoading(state),
  metroList: sharedSelectors.getMetroList(state),
});

const dispatchProps = {
  updateFilters: actions.update,
  syncFilters: actions.parse,
};

const _FiltersContainer: FunctionComponent<Props> = ({
  filters,
  isConfigLoading,
  config,
  updateFilters,
  isMetroListLoading,
  metroList,
  syncFilters,
  metroListError,
  configError,
}) => {
  useEffectMount(() => {
    syncFilters();
  });

  return (
    <Filters
      filters={filters}
      updateFilters={updateFilters}
      isConfigLoading={isConfigLoading}
      config={config}
      isMetroListLoading={isMetroListLoading}
      metroList={metroList}
      configError={configError}
      metroListError={metroListError}
    />
  );
};

export const FiltersContainer = connect(
  mapStateToProps,
  dispatchProps
)(_FiltersContainer);
