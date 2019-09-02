import React, { memo, useEffect, useMemo } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { parse } from 'qs';
import { mergeDeepRight } from 'ramda';
import { StudioListFilterProps } from './index';
import { StudioListFilter } from './StudioListFilter';
import { RootState } from '../../../model/types';
import { usePrevious } from '../../../hooks/usePrevious';
import { clearFilters } from '../model/actions';
import { getAppliedFilters } from '../model/selectors';

type Props = StudioListFilterProps &
  ReturnType<typeof mapStateToProps> &
  typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  appliedFilters: getAppliedFilters(state),
});

const dispatchProps = {
  handleClearFilters: clearFilters,
};

const getNonEmptyValues = (target: object) =>
  Object.entries(target)
    .filter(([_, value]) => {
      if (Array.isArray(value)) {
        return Boolean(value.length);
      }
      if (value.toString() === '[object Object]') {
        return Boolean(Object.values(value).length);
      }

      return Boolean(value);
    })
    .reduce(
      (acc, [prop, value]) => ({
        ...acc,
        [prop]: value,
      }),
      {}
    );

const getAbsAsPath = (asPath: string) => asPath.split('?')[0];

export const parseFilters = (asPath: string) => {
  const { filters } = parse(asPath.split('?')[1]);

  return filters ? JSON.parse(filters) : {};
};

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
}: Props) => {
  const { push, route, asPath, query } = useRouter();
  const prevAppliedFilters = usePrevious(appliedFilters);
  const nonEmptyFilters = useMemo(() => getNonEmptyValues(appliedFilters), [
    appliedFilters,
  ]);

  useEffect(() => {
    if (prevAppliedFilters !== appliedFilters) {
      push(`${route}`, getAsPathWithFilters(asPath, appliedFilters), {
        query,
        shallow: true,
      });
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
    />
  );
};

export const StudioListFilterContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_StudioListFilterContainer, dequal));
