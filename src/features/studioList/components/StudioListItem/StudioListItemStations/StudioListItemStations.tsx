import React, { memo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import dequal from 'dequal';
import { Station } from './StudioListItemStations.styles';
import { StudioListItemStationsProps } from './index';

const _StudioListItemStations = ({ stations }: StudioListItemStationsProps) => (
  <Grid container component="ul" alignItems="center" spacing={1}>
    {stations.map(({ name: station, color }) => (
      <Grid component="li" key={station} item>
        <Station color={color}>
          <Typography component="span" variant="caption">
            {station}
          </Typography>
        </Station>
      </Grid>
    ))}
  </Grid>
);

export const StudioListItemStations = memo(_StudioListItemStations, dequal);
