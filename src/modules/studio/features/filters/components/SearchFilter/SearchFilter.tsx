import React, { memo, useCallback } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { RootState } from '@model/types';
import { ClearableInput } from '@modules/ui/components';
import { setFilters } from '../../model/actions';
import { getFilters } from '../../model/selectors';

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  value: getFilters(state).name,
});

const dispatchProps = {
  handleChange: setFilters,
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
      debounce={{ wait: 500 }}
    />
  );
};

export const SearchFilter = connect(
  mapStateToProps,
  dispatchProps
)(memo(_StudioListFilterSearch, dequal));
