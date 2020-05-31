import React from 'react';
import { SuccessComponent, RoomEntity, StudioEntity } from '@model';
import { Grid } from '@material-ui/core';
import { ListService } from './types';
import { ListItem } from './ListItem';

export const ListSuccess: SuccessComponent<ListService> = ({ service }) => (
  <>
    <Grid container item>
      {service.state === 'loading' ? 'loading' : ''}
    </Grid>
    {
      // @ts-ignore
      service.data.map((entity: StudioEntity | RoomEntity) => (
        <ListItem key={entity.getId()} entity={entity} />
      ))
    }
  </>
);
