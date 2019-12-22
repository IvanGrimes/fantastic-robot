import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import dequal from 'dequal';
import { ListItemProps } from '@modules/studio/features/list';
import * as data from '@modules/studio/features/data';
import { getSize, Size } from '@modules/studio/utils/size';
import { Station } from './Station';
import { StationsSkeleton } from './StationsSkeleton';
import { useConfig } from '../../hooks/useConfig';

export type StationsProps = {
  className?: string;
  loading: boolean;
  list?: ReturnType<typeof data.selectors.getMetroList>;
  size?: Size;
} & Pick<ListItemProps, 'stationIds'>;

const _StudioListItemStations = ({
  className = '',
  list,
  stationIds,
  loading,
  size = 'small',
}: StationsProps) => {
  const stations = useConfig({ idList: stationIds, configList: list });

  if (loading) {
    return <StationsSkeleton />;
  }

  return (
    <Grid container component="ul" alignItems="center" className={className}>
      {stations.map(({ id, color, value }) => (
        <Grid component="li" key={id} item xs={12}>
          <Station color={color} value={value} size={getSize(size)} />
        </Grid>
      ))}
    </Grid>
  );
};

export const Stations = memo(_StudioListItemStations, dequal);
