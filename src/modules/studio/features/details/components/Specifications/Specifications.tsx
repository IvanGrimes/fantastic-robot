import React from 'react';
import { Grid } from '@material-ui/core';
import { Rooms } from '@modules/studio/components/Rooms';
import { TextList } from '@modules/studio/components/TextList';
import * as data from '@modules/studio/features/data';
import { Stations } from './Specifications.styles';

export type SpecificationsProps = {
  isLoading: boolean;
  isConfigLoading: boolean;
  interiorIds?: string[];
  config: ReturnType<typeof data.selectors.getConfig>;
  equipmentIds?: string[];
  isMetroListLoading: boolean;
  stationIds?: string[];
  metroList: ReturnType<typeof data.selectors.getMetroList>;
  roomsCount?: number;
};

export const Specifications = ({
  isLoading,
  isConfigLoading,
  interiorIds = [],
  config,
  equipmentIds = [],
  isMetroListLoading,
  stationIds = [],
  metroList,
  roomsCount,
}: SpecificationsProps) => (
  <Grid container spacing={2} justify="space-between" alignItems="flex-start">
    <Grid container spacing={1} item xs={8}>
      {roomsCount ? (
        <Grid item>
          <Rooms size="normal" loading={isLoading} roomsCount={roomsCount} />
        </Grid>
      ) : null}
      <Grid item>
        <TextList
          loading={isConfigLoading}
          ids={interiorIds}
          list={config.interior}
        />
      </Grid>
      <Grid item xs={12}>
        <TextList
          loading={isConfigLoading}
          ids={equipmentIds}
          list={config.equipment}
          size="small"
        />
      </Grid>
    </Grid>
    <Grid container item xs={3} justify="flex-end">
      <Stations
        size="small"
        loading={isMetroListLoading}
        stationIds={stationIds}
        list={metroList}
      />
    </Grid>
  </Grid>
);
