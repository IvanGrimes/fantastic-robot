import React, { memo, useCallback } from 'react';
import { connect } from 'react-redux';
import * as a from '../../redux/studios/actions';
import { StudioListFilter } from './StudioListFilter';
import { RootState } from '../../redux/types';
import {
  getAppliedFilters,
  getFiltersData,
} from '../../redux/studios/selectors';

export type StudioListFilterContainerProps = ReturnType<
  typeof mapStateToProps
> &
  typeof dispatchProps & {
    className?: string;
  };

const mapStateToProps = (state: RootState) => ({
  filters: getFiltersData(state),
  appliedFilters: getAppliedFilters(state),
});

const dispatchProps = {
  setFilters: a.setFilters,
};

const _StudioListFilterContainer = ({
  className = '',
  setFilters,
  filters,
  appliedFilters,
}: StudioListFilterContainerProps) => {
  const handleSelectType = useCallback(
    (id?: string) => () =>
      setFilters({ typeIds: typeof id !== 'undefined' ? [id] : id }),
    [setFilters]
  );

  return (
    <StudioListFilter
      className={className}
      typeList={filters.types}
      selectedTypesIds={appliedFilters.typeIds}
      handleSelectType={handleSelectType}
    />
  );
};

export const StudioListFilterContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_StudioListFilterContainer));
