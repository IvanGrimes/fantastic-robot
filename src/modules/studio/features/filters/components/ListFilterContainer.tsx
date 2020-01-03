import React, { memo, useEffect, useMemo, useRef } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { RootState } from '@model/types';
import { usePrevious } from '@hooks/usePrevious';
import { ListFilterProps } from './index';
import { ListFilter } from './ListFilter';
import { clearFilters, setFilters } from '../model/actions';
import { getFilters } from '../model/selectors';
import { getNonEmptyValues } from '../utils/getNonEmptyValues';
import { parseFilters } from '../utils/parseFilters';
import * as data from '../../data';
import { getAsPathWithFilters } from '../utils/getAsPathWithFilters';

type Props = ListFilterProps &
  ReturnType<typeof mapStateToProps> &
  typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  appliedFilters: getFilters(state),
  isLoading:
    data.selectors.getConfigLoading(state) &&
    data.selectors.getMetroListLoading(state),
});

const dispatchProps = {
  handleClearFilters: clearFilters,
  handleSetFilters: setFilters,
};

const _ListFilterContainer = ({
  className = '',
  appliedFilters,
  handleClearFilters,
  isLoading,
  handleSetFilters,
}: Props) => {
  const { push, route, asPath, query } = useRouter();
  const prevAppliedFilters = usePrevious(appliedFilters);
  const nonEmptyFilters = useMemo(() => getNonEmptyValues(appliedFilters), [
    appliedFilters,
  ]);
  const filtersFromQsRef = useRef(parseFilters(asPath));

  useEffect(() => {
    if (prevAppliedFilters !== appliedFilters) {
      window.history.pushState(
        'filter',
        'filter',
        getAsPathWithFilters(asPath, appliedFilters)
      );
    }
  }, [
    appliedFilters,
    asPath,
    nonEmptyFilters,
    prevAppliedFilters,
    push,
    query,
    route,
  ]);

  useEffect(() => {
    const filtersFromQs = filtersFromQsRef.current;

    if (filtersFromQs && Object.values(filtersFromQs).length) {
      handleSetFilters(filtersFromQs);
    }
  }, [handleSetFilters]);

  return (
    <ListFilter
      className={className}
      handleClearFilters={handleClearFilters}
      isLoading={isLoading}
    />
  );
};

export const ListFilterContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_ListFilterContainer, dequal));
