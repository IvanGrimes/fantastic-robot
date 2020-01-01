import React from 'react';
import { useCalendar } from '@modules/studio/features/calendar';
import { Grid, Typography, Button } from '@material-ui/core';
import { getDeclension } from '@utils/getDeclension';
import { useMediaQuery } from '@modules/ui/hooks';
import { List, ListItem } from './Reserve.styles';

export type Reserve = (
  | {
      isLoading: true;
      pricePerHour: undefined;
    }
  | {
      isLoading: false;
      pricePerHour: number;
    }) & { largeTabletQuery: string };

export const Reserve = (props: Reserve) => {
  const { select } = useCalendar();
  const hasRange = select.length > 1;
  const selectedHours = select.length - 1;
  const largetTabletQuery = useMediaQuery(props.largeTabletQuery);

  if (largetTabletQuery) {
    return (
      <Grid item spacing={2}>
        <Grid container>
          <Button variant="contained" color="primary" fullWidth>
            Зарезервировать
          </Button>
        </Grid>
      </Grid>
    );
  }

  if (props.isLoading) {
    return <span>reserve loading...</span>;
  }

  if (!hasRange) {
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
