import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { changeFilters, filtersStore } from '../../model';
import { Filters } from './Filters';

export const FiltersContainer = () => {
  const filters = useStore(filtersStore);

  useEffect(() => {
    changeFilters({});
  }, []);

  return <Filters filters={filters} />;
};
