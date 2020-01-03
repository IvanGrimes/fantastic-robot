import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { SlideTransition } from '@modules/ui';
import { MobileReserveProps } from '../MobileReserve';
import { Price } from '../../Price';
import { Separator, Dialog, FormGrid } from '../../Payment.styles';
import { RoomSelectDesktop } from '../../RoomSelect';
import { DesktopDateRange } from '../../DateRange';
import { DesktopReserve } from '../../Reserve';

export type TabletReserveProps = MobileReserveProps;

export const TabletReserve = ({
  isLoading,
  handleChangeRoomId,
  handleClose,
  handleOpen,
  isVisible,
  room,
  rooms,
  roomId,
}: TabletReserveProps) => {
  return (
    <Grid item spacing={2}>
      <Dialog
        open={isVisible}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
        scroll="paper"
        keepMounted
      >
        <FormGrid container justify="center" spacing={2}>
          <Grid item xs={11} justify="flex-start">
            <Price isLoading={isLoading} room={room} />
          </Grid>
          <Grid container item>
            <Separator />
          </Grid>
          <Grid xs={11} item>
            <RoomSelectDesktop
              list={rooms}
              isLoading={isLoading}
              value={roomId}
              handleChange={handleChangeRoomId}
            />
          </Grid>
          <Grid xs={11} item>
            <DesktopDateRange />
          </Grid>
          <Grid xs={11} item>
            <DesktopReserve isLoading={isLoading} room={room} />
          </Grid>
        </FormGrid>
      </Dialog>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          fullWidth
        >
          Зарезервировать
        </Button>
      </Grid>
    </Grid>
  );
};