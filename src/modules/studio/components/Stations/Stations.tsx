import React, { memo, ReactNode } from 'react';
import { Grid } from '@material-ui/core';
import dequal from 'dequal';
import { ListItemProps } from '@modules/studio/features/list';
import * as data from '@modules/studio/features/data';
import { getSize, Size } from '@modules/studio/utils/size';
import { Loader } from '@modules/ui';
import { Station } from './Station';
import { useConfig } from '../../hooks/useConfig';

export type StationsProps = {
  className?: string;
  loading: boolean;
  list?: ReturnType<typeof data.selectors.getMetroList>;
  size?: Size;
  skeleton?: ReactNode;
} & Pick<ListItemProps, 'stationIds'>;

const _StudioListItemStations = ({
  className = '',
  list,
  stationIds,
  loading,
  size = 'small',
  skeleton = <Loader top="3px" width="40%" height="12px" />,
}: StationsProps) => {
  const stations = useConfig({ idList: stationIds, configList: list });

  return (
    <Grid container component="ul" alignItems="center" className={className}>
      {loading || !stationIds.length || !list ? (
        skeleton
      ) : (
        <>
          {stations.map(({ id, color, value }) => (
            <Grid component="li" key={id} item xs={12}>
              <Station color={color} value={value} size={getSize(size)} />
            </Grid>
          ))}
        </>
      )}
    </Grid>
  );
};

export const Stations = memo(_StudioListItemStations, dequal);
