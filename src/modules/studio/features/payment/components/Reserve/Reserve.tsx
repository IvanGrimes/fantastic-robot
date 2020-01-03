import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useMediaQuery } from '@modules/ui/hooks';
import { useTheme } from '@material-ui/styles';
import { getBreakpoints } from '@theme/breakpoints';
import * as details from '@modules/studio/features/details';
import { Theme } from '@theme/types';
import { DesktopReserve, DesktopReserveProps } from './DesktopReserve';
import { TabletReserve } from './TabletReserve';
import { MobileReserve } from './MobileReserve';

export type Reserve = DesktopReserveProps & {
  largeTabletQuery: string;
  rooms: ReturnType<typeof details.selectors.getRooms>;
};

export const Reserve = ({
  room,
  rooms,
  isLoading,
  largeTabletQuery,
}: Reserve) => {
  const theme = useTheme<Theme>();
  const largeTabletMatches = useMediaQuery(largeTabletQuery);
  const mobileMatches = useMediaQuery(
    `(max-width: ${getBreakpoints({ theme }).values.sm}px)`
  );
  const [isVisible, setVisibility] = useState(false);
  const [roomId, setRoomId] = useState('');
  const handleOpen = useCallback(() => setVisibility(true), []);
  const handleClose = useCallback(() => setVisibility(false), []);
  const handleChangeRoomId = useCallback(
    (ev: ChangeEvent<{ value: unknown }>) =>
      setRoomId(ev.target.value as string),
    []
  );
  const selectedRoom = useMemo(
    () => room || rooms.filter(roomItem => roomItem.id === roomId)[0],
    [room, roomId, rooms]
  );

  useEffect(() => {
    if (rooms.length) {
      setRoomId(rooms[0].id);
    }
  }, [rooms]);

  if (mobileMatches) {
    return (
      <MobileReserve
        isLoading={isLoading}
        room={selectedRoom}
        isVisible={isVisible}
        handleClose={handleClose}
        handleChangeRoomId={handleChangeRoomId}
        handleOpen={handleOpen}
        roomId={roomId}
        rooms={rooms}
      />
    );
  }

  if (largeTabletMatches) {
    return (
      <TabletReserve
        isLoading={isLoading}
        room={selectedRoom}
        isVisible={isVisible}
        handleClose={handleClose}
        handleChangeRoomId={handleChangeRoomId}
        handleOpen={handleOpen}
        rooms={rooms}
        roomId={roomId}
      />
    );
  }

  return <DesktopReserve room={selectedRoom} isLoading={isLoading} />;
};
