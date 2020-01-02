import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { getDeclension } from '@utils/getDeclension';
import { List, ListItem } from './DesktopReserve.styles';
import { useFunctional } from './useFunctional';

export type DesktopReserveProps =
  | {
      isLoading: true;
      pricePerHour: undefined;
    }
  | {
      isLoading: false;
      pricePerHour: number;
    };

export const DesktopReserve = (props: DesktopReserveProps) => {
  const { hasRange, selectedHours, select } = useFunctional();

  if (props.isLoading || !hasRange) {
    return null;
  }

  return (
    <Grid container item spacing={2}>
      <List>
        <ListItem>
          <Grid item>
            <Typography variant="caption">
              {props.pricePerHour} x {selectedHours}{' '}
              {getDeclension(selectedHours, ['час', 'часа', 'часов'])}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption">
              {props.pricePerHour * selectedHours}
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
              <b>{props.pricePerHour * (select.length - 1)}</b>
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
