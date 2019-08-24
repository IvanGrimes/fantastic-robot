import React, { memo } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { StudioListFilterProps } from './index';
import { clearFilters } from '../../model/actions';
import { StudioListFilter } from './StudioListFilter';

type Props = StudioListFilterProps & typeof dispatchProps;

const dispatchProps = {
  handleClearFilters: clearFilters,
};

const _StudioListFilterContainer = ({
  className = '',
  handleClearFilters,
}: Props) => (
  <StudioListFilter
    className={className}
    handleClearFilters={handleClearFilters}
  />
);

export const StudioListFilterContainer = connect(
  null,
  dispatchProps
)(memo(_StudioListFilterContainer, dequal));
