import React, { memo, useCallback } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import { PropertyList } from '../../../../components/PropertyList';
import { RootState } from '../../../../model/types';
import { ColorCircle } from './StudioListFilterStation.styles';
import { StudioListFilterStationProps } from './index';
import { setFilters } from '../../model/actions';
import { getFilters } from '../../model/selectors';
import { getMetroList } from '../../../studioData/model/selectors';

type Props = StudioListFilterStationProps &
  ReturnType<typeof mapStateToProps> &
  typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  list: getMetroList(state),
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

  return (
    <PropertyList
      className={className}
      title="Станции метро"
      list={list}
      selectedIds={selectedIds}
      onChange={onChange}
      renderValue={({ color, name }) => (
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
