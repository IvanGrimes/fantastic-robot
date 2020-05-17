import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { updateFilters, changeDisabled, filtersStore } from '../internal';
import { Filters } from './Filters';
import { parseFiltersQueryString, updateFiltersQueryString } from '../utils';
import { configService } from '../../../model/services';

export const FiltersContainer = () => {
  const filters = useStore(filtersStore);
  const config = configService.useService();

  useEffect(() => {
    updateFilters(parseFiltersQueryString(window.location));
    changeDisabled(false);
  }, []);

  useEffect(
    () =>
      filtersStore.watch(updateFilters, (_, payload) => {
        updateFiltersQueryString(payload);
      }),
    []
  );

  return <Filters filters={filters} config={config} />;
};
