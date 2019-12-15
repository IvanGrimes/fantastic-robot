import React, { memo, useCallback } from 'react';
import { connect } from 'react-redux';
import dequal from 'dequal';
import { PropertyList } from '@components/PropertyList';
import { RootState } from '@model/types';
import { StudioListFilterTypeProps } from './index';
import { setFilters } from '../../model/actions';
import { getFilters } from '../../model/selectors';
import { getConfig } from '../../../data/model/selectors';

type Props = StudioListFilterTypeProps &
  ReturnType<typeof mapStateToProps> &
  typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  list: getConfig(state).interior,
  selectedIds: getFilters(state).interiors,
});

const dispatchProps = {
  handleChange: setFilters,
};

const _StudioListFilterInterior = ({
  className = '',
  list,
  selectedIds,
  handleChange,
  isClearable = true,
}: Props) => {
  const onChange = useCallback(
    (id: any[]) => () => handleChange({ interiors: id }),
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

export const InteriorFilter = connect(
  mapStateToProps,
  dispatchProps
)(memo(_StudioListFilterInterior, dequal));
