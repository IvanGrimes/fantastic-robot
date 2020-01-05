import React from 'react';
import { Grid } from '@material-ui/core';
import { Rooms } from '@modules/studio/components/Rooms';
import { TextList } from '@modules/studio/components/TextList';
import * as data from '@modules/studio/features/data';
import { Loader } from '@modules/ui';
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
      <Grid item>
        <Rooms
          size="normal"
          loading={isLoading}
          roomsCount={roomsCount}
          skeleton={<Loader top="5px" width="50px" height="20px" />}
        />
      </Grid>
      <Grid item>
        <TextList
          loading={isConfigLoading}
          ids={interiorIds}
          list={config.interior}
          skeleton={<Loader top="5px" width="280px" height="20px" />}
        />
      </Grid>
      <Grid item xs={12}>
        <TextList
          loading={isConfigLoading}
          ids={equipmentIds}
          list={config.equipment}
          size="small"
          skeleton={<Loader top="5px" width="300px" height="20px" />}
        />
      </Grid>
    </Grid>
    <Grid container item xs={3} justify="flex-end">
      <Stations
        size="small"
        loading={isMetroListLoading}
        stationIds={stationIds}
        list={metroList}
        skeleton={<Loader top="4px" width="150px" height="20px" />}
      />
    </Grid>
  </Grid>
);
