import React, { memo, useCallback } from 'react';
import { connect } from 'react-redux';
import dequal from 'dequal';
import { GridProps } from '@material-ui/core/Grid';
import { getAppliedFilters } from '../../../../model/selectors';
import { RootState } from '../../../../../../model/types';
import { setFilters } from '../../../../model/actions';
import { ChipList, ChipListProps } from '../../../../../../components/ChipList';

export type StudioListParametersContainerProps = {
  parameter: 'type' | 'station';
} & ReturnType<typeof mapStateToProps> &
  Pick<ChipListProps, 'list'> &
  Pick<ChipListProps, 'renderName'> &
  typeof dispatchProps &
  GridProps;

const mapStateToProps = (state: RootState) => ({
  appliedFilters: getAppliedFilters(state),
});

const dispatchProps = {
  handleSetFilters: setFilters,
};

const _StudioListParametersContainer = ({
  handleSetFilters,
  list,
  appliedFilters,
  parameter,
  ...props
}: StudioListParametersContainerProps) => {
  const property = `${parameter}Ids` as 'typeIds' | 'stationIds';
  const handleToggleType = useCallback(
    (id: string) => handleSetFilters({ [property]: [id] }),
    [handleSetFilters, property]
  );

  return (
    <ChipList
      list={list}
      selectedListId={appliedFilters[property]}
      handleToggle={handleToggleType}
      {...props}
    />
  );
};

export const StudioListParametersContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_StudioListParametersContainer, dequal));
