import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { useConfig } from '@hooks';
import { mergeDeepRight } from 'ramda';
import { updateFilters, changeDisabled, filtersStore } from '../internal';
import { Filters } from './Filters';
import { parseFiltersQueryString, updateFiltersQueryString } from '../utils';

export const FiltersContainer = () => {
  const filters = useStore(filtersStore);
  const config = useConfig();

  useEffect(() => {
    updateFilters(parseFiltersQueryString(window.location));
    changeDisabled(false);
  }, []);

  useEffect(
    () =>
      filtersStore.watch(updateFilters, (_, payload) => {
        updateFiltersQueryString(
          mergeDeepRight(parseFiltersQueryString(window.location), payload)
        );
      }),
    []
  );

  return (
    <Filters filters={filters} updateFilters={updateFilters} config={config} />
  );
};
