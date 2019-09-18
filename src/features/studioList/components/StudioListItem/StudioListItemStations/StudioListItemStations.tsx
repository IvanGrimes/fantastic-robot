import React, { memo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import dequal from 'dequal';
import { Station } from './StudioListItemStations.styles';
import { StudioListItemStationsProps } from './index';

const _StudioListItemStations = ({
  stationIds,
}: StudioListItemStationsProps) => (
  <Grid container component="ul" alignItems="center" spacing={1}>
    {stationIds.map(id => (
      <Grid component="li" key={id} item>
        <Station color="red">
          <Typography component="span" variant="caption">
            {id}
          </Typography>
        </Station>
      </Grid>
    ))}
  </Grid>
);

export const StudioListItemStations = memo(_StudioListItemStations, dequal);
