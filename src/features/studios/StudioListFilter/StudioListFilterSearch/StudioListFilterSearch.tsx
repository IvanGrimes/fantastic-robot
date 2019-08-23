import React, { memo, useCallback } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { RootState } from '../../../../model/types';
import * as a from '../../../studios/actions';
import { getAppliedFilters } from '../../selectors';
import { ClearableInput } from '../../../../components/ClearableInput';

export type StudioListFilterSearchProps = ReturnType<typeof mapStateToProps> &
  typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  value: getAppliedFilters(state).name,
});

const dispatchProps = {
  handleChange: a.setFilters,
};

const _StudioListFilterSearch = ({
  handleChange,
  value,
}: StudioListFilterSearchProps) => {
  const onChange = useCallback((name: string) => handleChange({ name }), [
    handleChange,
  ]);

  return (
    <ClearableInput
      label="Поиск по названию"
      onChange={onChange}
      value={value}
    />
  );
};

export const StudioListFilterSearch = connect(
  mapStateToProps,
  dispatchProps
)(memo(_StudioListFilterSearch, dequal));
