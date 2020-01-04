import React, { ReactNode, useMemo } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { getDeclension } from '@utils/getDeclension';
import * as details from '@modules/studio/features/details';
import { useCalendar } from '@modules/studio/features/calendar';
import { format } from 'date-fns';
import { List, ListItem, ButtonWrapper } from './DesktopReserve.styles';
import { useFunctional } from './useFunctional';

export type DesktopReserveProps = {
  isLoading: boolean;
  room: ReturnType<typeof details.selectors.getRooms>[number];
};

export const DesktopReserve = ({ isLoading, room }: DesktopReserveProps) => {
  const { hasRange, select } = useFunctional();
  const { selectByDate } = useCalendar();
  const list = useMemo(
    () =>
      Object.entries(selectByDate).reduce<
        {
          key: string;
          description: ReactNode;
          cost: number;
        }[]
      >((acc, [date, range]) => {
        const price = room.averagePrice;
        const hours = range.length - 1;

        if (range.length > 1) {
          return [
            ...acc,
            {
              key: date,
              description: (
                <>
                  {format(Number(date), 'dd/MM/yy')} &mdash;&nbsp;
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
    [room.averagePrice, selectByDate]
  );

  if (isLoading || !hasRange) {
    return null;
  }

  return (
    <Grid container item spacing={2}>
      <List>
        <ListItem>
          {list.map(({ key, description, cost }) => (
            <Grid container key={key}>
              <Grid item>
                <Typography variant="caption">{description}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="caption">{cost}</Typography>
              </Grid>
            </Grid>
          ))}
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
      <ButtonWrapper item container>
        <Button variant="contained" color="primary" fullWidth>
          Зарезервировать
        </Button>
      </ButtonWrapper>
    </Grid>
  );
};
