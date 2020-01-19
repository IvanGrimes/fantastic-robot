import React, { ReactNode, useMemo } from 'react';
import { Grid } from '@material-ui/core';
import * as ui from '@modules/ui';
import { Photos } from './Photos';
import * as calendar from '../../calendar';
import * as payment from '../../payment';
import { MainGrid } from './Details.styles';
import { Layout } from './Layout';
import { useDetails } from './DetailsContext';
import { Header } from './Header';
import { Specifications } from './Specifications';
import { Description, descriptionSkeleton } from './Description';
import { Contacts } from './Contacts';
import { RoomList } from './RoomList';
import { Schedule } from './Schedule';
import { Location } from './Location';

export type DetailsNewProps = { backLink: ReactNode };

const { Container, Hidden } = ui;
const { CalendarProvider } = calendar;
const { Payment } = payment;

export const Details = ({ backLink }: DetailsNewProps) => {
  const {
    reservations,
    workHours,
    room,
    rooms,
    isRoomLoading,
    isRoomsLoading,
    variant,
  } = useDetails();
  const node = useMemo(
    () => (
      <>
        <Header />
        <Specifications />
        {variant === 'room' && !room.id ? descriptionSkeleton : null}
        <Description />
        <Contacts />
        <RoomList />
        <Schedule />
        <Location />
      </>
    ),
    [room.id, variant]
  );

  return (
    <Layout backLink={backLink}>
      <Grid container alignContent="flex-start">
        <Grid container>
          <Photos />
        </Grid>
        <Grid container>
          <Container variant="secondary">
            <CalendarProvider reservations={reservations} workHours={workHours}>
              <MainGrid container justify="space-between">
                <Grid item xs={7}>
                  <Hidden query="(max-width: 1100px)">{node}</Hidden>
                </Grid>
                <Hidden query="(min-width: 1101px)">
                  <Grid item xs={12}>
                    {node}
                  </Grid>
                </Hidden>
                <Grid item xs={4}>
                  <Payment
                    variant={variant}
                    room={room}
                    rooms={rooms}
                    isRoomLoading={isRoomLoading}
                    isRoomsLoading={isRoomsLoading}
                  />
                </Grid>
              </MainGrid>
            </CalendarProvider>
          </Container>
        </Grid>
      </Grid>
    </Layout>
  );
};
