import React, { memo, ReactNode, useMemo } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { getDeclension } from '@utils/getDeclension';
import * as details from '@modules/studio/features/details';
import { useCalendar } from '@modules/studio/features/calendar';
import { format } from 'date-fns';
import dequal from 'dequal';
import { List, ListItem, ButtonWrapper } from './DesktopReserve.styles';
import { useFunctional } from './useFunctional';

export type DesktopReserveProps = {
  isLoading: boolean;
  room?: ReturnType<typeof details.selectors.getRooms>[number];
};

const _DesktopReserve = ({ isLoading, room }: DesktopReserveProps) => {
  const { hasRange, select } = useFunctional();
  const { selectByDate } = useCalendar();
  const list = useMemo(
    () =>
      Object.entries(selectByDate)
        .sort((a, b) => Number(a[0]) - Number(b[0]))
        .reduce<
          {
            key: string;
            description: ReactNode;
            cost: number;
          }[]
        >((acc, [date, range]) => {
          const price = room ? room.averagePrice : 0;
          const hours = range.length - 1;

          if (range.length > 1) {
            return [
              ...acc,
              {
                key: date,
                description: (
                  <>
                    <b>{format(Number(date), 'dd/MM/yy')}</b> &mdash;&nbsp;
                    {price} X {hours}{' '}
                    {getDeclension(hours, ['час', 'часа', 'часов'])}
                  </>
                ),
                cost: price * hours,
              },
            ];
          }

          return acc;
        }, []),
    [room, selectByDate]
  );

  if (typeof room !== 'undefined') {
    if (isLoading || !hasRange) {
      return null;
    }

    return (
      <Grid container item spacing={2}>
        <List>
          {list.map(({ key, description, cost }) => (
            <ListItem key={key} container justify="space-between">
              <Grid item>
                <Typography variant="caption">{description}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="caption">{cost}</Typography>
              </Grid>
            </ListItem>
          ))}
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
        <ButtonWrapper item container>
          <Button variant="contained" color="primary" fullWidth>
            Зарезервировать
          </Button>
        </ButtonWrapper>
      </Grid>
    );
  }

  return null;
};

export const DesktopReserve = memo(_DesktopReserve, dequal);
