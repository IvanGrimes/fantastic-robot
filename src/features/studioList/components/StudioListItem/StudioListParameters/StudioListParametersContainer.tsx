import React, { memo, useCallback } from 'react';
import { connect } from 'react-redux';
import dequal from 'dequal';
import { GridProps } from '@material-ui/core/Grid';
import { RootState } from '../../../../../model/types';
import { ChipList, ChipListProps } from '../../../../../components/ChipList';
import { setFilters } from '../../../../studioFilters/model/actions';
import { getFilters } from '../../../../studioFilters/model/selectors';

export type StudioListParametersContainerProps = {
  parameter: keyof Omit<
    Omit<Omit<ReturnType<typeof getFilters>, 'name'>, 'bottomRight'>,
    'topLeft'
  >;
} & ReturnType<typeof mapStateToProps> &
  Pick<ChipListProps, 'list'> &
  Pick<ChipListProps, 'renderValue'> &
  typeof dispatchProps &
  GridProps;

const mapStateToProps = (state: RootState) => ({
  filters: getFilters(state),
});

const dispatchProps = {
  handleSetFilters: setFilters,
};

const _StudioListParametersContainer = ({
  handleSetFilters,
  list,
  filters,
  parameter,
  ...props
}: StudioListParametersContainerProps) => {
  const handleToggleType = useCallback(
    (id: string) => handleSetFilters({ [parameter]: [id] }),
    [handleSetFilters, parameter]
  );

  return (
    <ChipList
      list={list}
      selectedListId={filters[parameter]}
      handleToggle={handleToggleType}
      {...props}
    />
  );
};

export const StudioListParametersContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_StudioListParametersContainer, dequal));
