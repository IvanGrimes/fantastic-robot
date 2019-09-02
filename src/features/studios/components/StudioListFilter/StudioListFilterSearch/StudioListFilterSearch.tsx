import React, { memo, useCallback } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { RootState } from '../../../../../model/types';
import * as a from '../../../model/actions';
import { getAppliedFilters } from '../../../model/selectors';
import { ClearableInput } from '../../../../../components/ClearableInput';

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  value: getAppliedFilters(state).name,
});

const dispatchProps = {
  handleChange: a.setFilters,
};

const _StudioListFilterSearch = ({ handleChange, value }: Props) => {
  const onChange = useCallback((name: string) => handleChange({ name }), [
    handleChange,
  ]);

  return (
    <ClearableInput
      variant="standard"
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
