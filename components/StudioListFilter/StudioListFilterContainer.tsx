import React, { memo, useCallback } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import * as a from '../../redux/studios/actions';
import { StudioListFilter } from './StudioListFilter';

export type StudioListFilterContainerProps = typeof dispatchProps & {
  className?: string;
};

const dispatchProps = {
  setFilters: a.setFilters,
};

const _StudioListFilterContainer = ({
  className = '',
  setFilters,
}: StudioListFilterContainerProps) => {
  const handleChangeName = useCallback(
    debounce((value: string) => setFilters({ name: value }), 100),
    [setFilters]
  );

  return (
    <StudioListFilter
      className={className}
      handleChangeName={handleChangeName}
    />
  );
};

export const StudioListFilterContainer = connect(
  null,
  dispatchProps
)(memo(_StudioListFilterContainer));
