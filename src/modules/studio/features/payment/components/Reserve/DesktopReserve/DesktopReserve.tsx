import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { getDeclension } from '@utils/getDeclension';
import * as details from '@modules/studio/features/details';
import { List, ListItem } from './DesktopReserve.styles';
import { useFunctional } from './useFunctional';

export type DesktopReserveProps = {
  isLoading: boolean;
  room: ReturnType<typeof details.selectors.getRooms>[number];
};

export const DesktopReserve = ({ isLoading, room }: DesktopReserveProps) => {
  const { hasRange, selectedHours, select } = useFunctional();

  if (isLoading || !hasRange) {
    return null;
  }

  return (
    <Grid container item spacing={2}>
      <List>
        <ListItem>
          <Grid item>
            <Typography variant="caption">
              {room.averagePrice} x {selectedHours}{' '}
              {getDeclension(selectedHours, ['час', 'часа', 'часов'])}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption">
              {room.averagePrice * selectedHours}
            </Typography>
          </Grid>
        </ListItem>
        <ListItem>
          <Grid item>
            <Typography variant="caption">
              <b>Всего</b>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption">
              <b>{room.averagePrice * (select.length - 1)}</b>
            </Typography>
          </Grid>
        </ListItem>
      </List>
      <Grid item container>
        <Button variant="contained" color="primary" fullWidth>
          Зарезервировать
        </Button>
      </Grid>
    </Grid>
  );
};
