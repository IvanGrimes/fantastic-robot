import React, { memo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { FilterPropertyList } from './FilterPropertyList';
import { ColorCircle } from './StudioListFilter.styles';

type Props = {
  className: string;
  typeList: { id: string; name: string }[];
  selectedTypesIds: string[];
  handleSelectType: (id?: string) => () => void;
  stationList: { id: string; name: string }[];
  selectedStationIds: string[];
  handleSelectStation: (id?: string) => () => void;
};

const _StudioListFilter = ({
  className,
  typeList,
  selectedTypesIds,
  handleSelectType,
  stationList,
  selectedStationIds,
  handleSelectStation,
}: Props) => (
  <Grid className={className} container spacing={4}>
    <Grid item xs={6}>
      <FilterPropertyList
        title="Типы студий"
        list={typeList}
        selectedIds={selectedTypesIds}
        onChange={handleSelectType}
      />
    </Grid>
    <Grid item xs={6}>
      <FilterPropertyList
        title="Станции метро"
        list={stationList}
        selectedIds={selectedStationIds}
        onChange={handleSelectStation}
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
      />
    </Grid>
  </Grid>
);

export const StudioListFilter = memo(_StudioListFilter);
