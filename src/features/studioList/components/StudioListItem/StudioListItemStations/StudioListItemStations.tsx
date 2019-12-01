import React, { memo, useMemo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import dequal from 'dequal';
import { Station } from './StudioListItemStations.styles';
import { StudioListItemStationsProps } from './index';
import { mergeIdWithConfig } from '../../../utils/mergeIdWithConfig';
import { StudioListItemProps } from '../index';
import { DataState } from '../../../../studioData/model/reducer';
import { StudioListItemStationsSkeleton } from './StudioListItemStationsSkeleton';

export type StudioListItemStationsProps = {
  loading: boolean;
  list?: DataState['metroList'];
} & Pick<StudioListItemProps, 'stationIds'>;

const _StudioListItemStations = ({
  list,
  stationIds,
  loading,
}: StudioListItemStationsProps) => {
  const stations = useMemo(
    () =>
      list ? mergeIdWithConfig<typeof list[number]>(stationIds, list) : {},
    [list, stationIds]
  );

  if (loading) {
    return <StudioListItemStationsSkeleton />;
  }

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
