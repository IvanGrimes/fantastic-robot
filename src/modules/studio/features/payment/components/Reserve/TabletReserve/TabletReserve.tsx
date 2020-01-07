import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import { DynamicRendering, SlideTransition, Button } from '@modules/ui';
import dequal from 'dequal';
import { MobileReserveProps } from '../MobileReserve';
import { Price } from '../../Price';
import { Separator, Dialog, FormGrid } from '../../Payment.styles';
import { RoomSelectDesktop } from '../../RoomSelect';
import { DesktopDateRange } from '../../DateRange';
import { DesktopReserve } from '../../Reserve';

export type TabletReserveProps = MobileReserveProps;

const _TabletReserve = ({
  isLoading,
  handleChangeRoomId,
  handleClose,
  handleOpen,
  isVisible,
  room,
  rooms,
  roomId,
}: TabletReserveProps) => (
  <Grid item>
    <Dialog
      open={isVisible}
      onClose={handleClose}
      TransitionComponent={SlideTransition}
      scroll="paper"
      keepMounted
    >
      <DynamicRendering>
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
    <Grid item>
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

export const TabletReserve = memo(_TabletReserve, dequal);
