import React, { ChangeEvent } from 'react';
import { Button, Grid, IconButton, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { BaseHeaderBar, SlideTransition } from '@modules/ui';
import * as details from '@modules/studio/features/details';
import { Price } from '../../Price';
import { RoomSelectDesktop } from '../../RoomSelect';
import { DesktopDateRange } from '../../DateRange';
import { DesktopReserve } from '../DesktopReserve';
import { Separator, Dialog, FormGrid } from '../../Payment.styles';

export type MobileReserveProps = {
  isLoading: boolean;
  room: ReturnType<typeof details.selectors.getRooms>[number];
  isVisible: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  handleChangeRoomId: (ev: ChangeEvent<{ value: unknown }>) => void;
  roomId: string;
  rooms: ReturnType<typeof details.selectors.getRooms>;
};

export const MobileReserve = ({
  isLoading,
  rooms,
  room,
  isVisible,
  handleOpen,
  handleClose,
  handleChangeRoomId,
  roomId,
}: MobileReserveProps) => {
  return (
    <Grid item spacing={2}>
      <Dialog
        open={isVisible}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
        keepMounted
        fullScreen
      >
        <BaseHeaderBar>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
                size="small"
              >
                <Close />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Резервирование</Typography>
            </Grid>
            <Grid item />
          </Grid>
        </BaseHeaderBar>
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
      <Grid>
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
