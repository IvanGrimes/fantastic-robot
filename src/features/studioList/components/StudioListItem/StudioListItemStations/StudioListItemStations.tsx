import React, { memo, useMemo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import dequal from 'dequal';
import { Station } from './StudioListItemStations.styles';
import { StudioListItemStationsProps } from './index';
import { mergeIdWithConfig } from '../../../utils/mergeIdWithConfig';

const _StudioListItemStations = ({
  list,
  stationIds,
}: StudioListItemStationsProps) => {
  const stations = useMemo(
    () => mergeIdWithConfig<typeof list[number]>(stationIds, list),
    [list, stationIds]
  );

  return (
    <Grid container component="ul" alignItems="center" spacing={1}>
      {stationIds &&
        stationIds.map(id => (
          <Grid component="li" key={id} item>
            <Station color={stations[id].color}>
              <Typography component="span" variant="caption">
                {stations[id].value}
              </Typography>
            </Station>
          </Grid>
        ))}
    </Grid>
  );
};

export const StudioListItemStations = memo(_StudioListItemStations, dequal);
