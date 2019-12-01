import React, { memo, useEffect, useMemo } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { mergeDeepRight } from 'ramda';
import { StudioListFilterProps } from './index';
import { StudioListFilter } from './StudioListFilter';
import { RootState } from '../../../model/types';
import { usePrevious } from '../../../hooks/usePrevious';
import { clearFilters } from '../model/actions';
import { getFilters } from '../model/selectors';
import { getNonEmptyValues } from '../utils/getNonEmptyValues';
import { parseFilters } from '../utils/parseFilters';
import {
  getConfigLoading,
  getMetroListLoading,
} from '../../studioData/model/selectors';

type Props = StudioListFilterProps &
  ReturnType<typeof mapStateToProps> &
  typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  appliedFilters: getFilters(state),
  isLoading: getConfigLoading(state) && getMetroListLoading(state),
});

const dispatchProps = {
  handleClearFilters: clearFilters,
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
}: Props) => {
  const { push, route, asPath, query } = useRouter();
  const prevAppliedFilters = usePrevious(appliedFilters);
  const nonEmptyFilters = useMemo(() => getNonEmptyValues(appliedFilters), [
    appliedFilters,
  ]);

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
