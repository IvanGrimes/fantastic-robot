import React, { memo, useCallback } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import * as ui from '@modules/ui';
import { RootState } from '@model/types';
import { ColorCircle } from './StationFilter.styles';
import { StudioListFilterStationProps } from './index';
import { setFilters } from '../../model/actions';
import { getFilters } from '../../model/selectors';
import * as data from '../../../data';

type Props = StudioListFilterStationProps &
  ReturnType<typeof mapStateToProps> &
  typeof dispatchProps;

const { PropertyList } = ui

const mapStateToProps = (state: RootState) => ({
  list: data.selectors.getMetroList(state),
  selectedIds: getFilters(state).stations,
});

const dispatchProps = {
  handleChange: setFilters,
};

const _StudioListFilterStation = ({
  className = '',
  list,
  selectedIds,
  handleChange,
  isClearable = true,
}: Props) => {
  const onChange = useCallback(
    (id: any[]) => () => handleChange({ stations: id }),
    [handleChange]
  );
  const renderValue = useCallback(
    ({ color, value }) => (
      <Grid container alignItems="center" spacing={1}>
        <Grid item>
          <ColorCircle color={color} />
        </Grid>
        <Grid item>
          <Typography>{value}</Typography>
        </Grid>
      </Grid>
    ),
    []
  );

  return (
    <PropertyList
      className={className}
      title="Станции метро"
      list={list}
      selectedIds={selectedIds}
      onChange={onChange}
      renderValue={renderValue}
      isSearchable
      isClearable={isClearable}
      searchProps={{
        placeholder: 'Поиск',
      }}
      variant="checkbox"
    />
  );
};

export const StationFilter = connect(
  mapStateToProps,
  dispatchProps
)(memo(_StudioListFilterStation, dequal));
