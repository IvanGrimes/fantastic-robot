import React, { memo, useEffect, useMemo, useRef } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { mergeDeepRight } from 'ramda';
import { RootState } from '@model/types';
import { usePrevious } from '@hooks/usePrevious';
import { StudioListFilterProps } from './index';
import { StudioListFilter } from './StudioListFilter';
import { clearFilters, setFilters } from '../model/actions';
import { getFilters } from '../model/selectors';
import { getNonEmptyValues } from '../utils/getNonEmptyValues';
import { parseFilters } from '../utils/parseFilters';
import * as data from '../../data';

type Props = StudioListFilterProps &
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

const getAbsAsPath = (asPath: string) => asPath.split('?')[0];

export const getAsPathWithFilters = (
  asPath: string,
  appliedFilters: Props['appliedFilters']
) => {
  const absAsPath = getAbsAsPath(asPath);
  const prevFilters = parseFilters(asPath);
  const nextFilters = mergeDeepRight(
    prevFilters,
    getNonEmptyValues(appliedFilters)
  );
  const hasFilters = Object.values(getNonEmptyValues(appliedFilters)).length;

  return hasFilters
    ? `${absAsPath}?filters=${JSON.stringify(nextFilters)}`
    : absAsPath;
};

const _StudioListFilterContainer = ({
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
    <StudioListFilter
      className={className}
      handleClearFilters={handleClearFilters}
      isLoading={isLoading}
    />
  );
};

export const StudioListFilterContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_StudioListFilterContainer, dequal));
