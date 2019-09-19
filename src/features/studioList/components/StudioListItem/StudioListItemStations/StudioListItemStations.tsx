import React, { memo, useMemo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import dequal from 'dequal';
import { Station } from './StudioListItemStations.styles';
import { StudioListItemStationsProps } from './index';

const _StudioListItemStations = ({
  isLoading,
  list,
  stationIds,
}: StudioListItemStationsProps) => {
  const stations = useMemo<{ [key: string]: { name: string; color: string } }>(
    () =>
      list
        .filter(item => stationIds.includes(item.id))
        .reduce(
          (acc, item) => ({
            ...acc,
            [item.id]: { name: item.value, color: item.color },
          }),
          {}
        ),
    [list, stationIds]
  );

  if (isLoading) {
    return <span>Loading metro list...</span>;
  }

  console.log(stations);

  return (
    <Grid container component="ul" alignItems="center" spacing={1}>
      {stationIds.map(id => (
        <Grid component="li" key={id} item>
          <Station color={stations[id].color}>
            <Typography component="span" variant="caption">
              {stations[id].name}
            </Typography>
          </Station>
        </Grid>
      ))}
    </Grid>
  );
};

export const StudioListItemStations = memo(_StudioListItemStations, dequal);
