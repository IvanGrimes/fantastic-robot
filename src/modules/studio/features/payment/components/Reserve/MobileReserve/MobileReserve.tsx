import React, { ChangeEvent, memo } from 'react';
import { Grid, IconButton, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import * as ui from '@modules/ui';
import dequal from 'dequal';
import * as details from '../../../../details';
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

const { SlideTransition, DynamicRendering, BaseHeaderBar, Button } = ui;

const _MobileReserve = ({
  isLoading,
  rooms,
  room,
  isVisible,
  handleOpen,
  handleClose,
  handleChangeRoomId,
  roomId,
}: MobileReserveProps) => (
  <Grid item>
    <Dialog
      open={isVisible}
      onClose={handleClose}
      TransitionComponent={SlideTransition}
      keepMounted
      fullScreen
    >
      <DynamicRendering>
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
          <Grid item xs={11}>
            <Price isLoading={isLoading} room={room} />
          </Grid>
          <Grid container item>
            <Separator />
          </Grid>
          {rooms.length ? (
            <Grid xs={11} item>
              <RoomSelectDesktop
                list={rooms}
                isLoading={isLoading}
                value={roomId}
                handleChange={handleChangeRoomId}
              />
            </Grid>
          ) : null}
          <Grid xs={11} item>
            <DesktopDateRange isLoading={isLoading} />
          </Grid>
          <Grid xs={11} item>
            <DesktopReserve isLoading={isLoading} room={room} />
          </Grid>
        </FormGrid>
      </DynamicRendering>
    </Dialog>
    <Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        loading={isLoading}
        fullWidth
      >
        Зарезервировать
      </Button>
    </Grid>
  </Grid>
);

export const MobileReserve = memo(_MobileReserve, dequal);
