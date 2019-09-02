import React, { memo, useCallback } from 'react';
import { connect } from 'react-redux';
import dequal from 'dequal';
import { PropertyList } from '../../../../../components/PropertyList';
import { RootState } from '../../../../../model/types';
import { getAppliedFilters, getFiltersData } from '../../../model/selectors';
import * as a from '../../../model/actions';
import { StudioListFilterTypeProps } from './index';

export type Props = StudioListFilterTypeProps &
  ReturnType<typeof mapStateToProps> &
  typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  list: getFiltersData(state).types,
  selectedIds: getAppliedFilters(state).typeIds,
});

const dispatchProps = {
  handleChange: a.setFilters,
};

const _StudioListFilterType = ({
  className = '',
  list,
  selectedIds,
  handleChange,
  isClearable = true,
}: Props) => {
  const onChange = useCallback(
    (id: any[]) => () => handleChange({ typeIds: id }),
    [handleChange]
  );

  return (
    <PropertyList
      className={className}
      title="Типы студий"
      list={list}
      selectedIds={selectedIds}
      onChange={onChange}
      isClearable={isClearable}
    />
  );
};

export const StudioListFilterType = connect(
  mapStateToProps,
  dispatchProps
)(memo(_StudioListFilterType, dequal));
