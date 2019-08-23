import React, { memo, useCallback } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import { PropertyList } from '../../../../components/PropertyList';
import { RootState } from '../../../../model/types';
import { getAppliedFilters, getFiltersData } from '../../selectors';
import * as a from '../../actions';
import { ColorCircle } from './StudioListFilterStation.styles';

export type StudioListFilterStationProps = {
  isClearable?: boolean;
} & ReturnType<typeof mapStateToProps> &
  typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  list: getFiltersData(state).stations,
  selectedIds: getAppliedFilters(state).stationIds,
});

const dispatchProps = {
  handleChange: a.setFilters,
};

const _StudioListFilterStation = ({
  list,
  selectedIds,
  handleChange,
  isClearable = true,
}: StudioListFilterStationProps) => {
  const onChange = useCallback(
    (id: any[]) => () => handleChange({ stationIds: id }),
    [handleChange]
  );

  return (
    <PropertyList
      title="Станции метро"
      list={list}
      selectedIds={selectedIds}
      onChange={onChange}
      renderName={({ color, name }) => (
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <ColorCircle color={color} />
          </Grid>
          <Grid item>
            <Typography>{name}</Typography>
          </Grid>
        </Grid>
      )}
      isSearchable
      isClearable={isClearable}
      searchProps={{
        placeholder: 'Поиск',
      }}
      variant="checkbox"
    />
  );
};

export const StudioListFilterStation = connect(
  mapStateToProps,
  dispatchProps
)(memo(_StudioListFilterStation, dequal));
