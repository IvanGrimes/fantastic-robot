import React, { memo, useMemo } from 'react';
import { Grid } from '@material-ui/core';
import dequal from 'dequal';
import { Station } from '@components/Station';
import { mergeIdWithConfig } from '../../../utils/mergeIdWithConfig';
import { StudioListItemProps } from '../index';
import { DataState } from '../../../../data/model/reducer';
import { StationsSkeleton } from './StationsSkeleton';

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
      list ? mergeIdWithConfig<typeof list[number]>(stationIds, list) : [],
    [list, stationIds]
  );

  if (loading) {
    return <StationsSkeleton />;
  }

  return (
    <Grid container component="ul" alignItems="center" spacing={1}>
      {stations.map(({ id, color, value }) => (
        <Grid component="li" key={id} item xs={12}>
          <Station color={color} value={value} />
        </Grid>
      ))}
    </Grid>
  );
};

export const Stations = memo(_StudioListItemStations, dequal);
