import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Grid } from '@material-ui/core';
import * as ui from '@modules/ui';
import * as details from '../../details';
import { Wrapper } from './Payment.styles';
import { Payment } from './Payment';

const { Hidden, Container, hooks: { useMediaQuery } } = ui

export type PaymentProps = {
  variant: details.DetailsVariant;
  isRoomsLoading: boolean;
  rooms: ReturnType<typeof details.selectors.getRooms>;
  isRoomLoading: boolean;
  room: ReturnType<typeof details.selectors.getRoomById>;
};

const desktopQuery = '(min-width: 1100px)';
const largeTabletQuery = '(max-width: 1100px)';
const HEADER_HEIGHT = 128;
const MARGIN_TOP = 32;
const SCROLL_OFFSET = HEADER_HEIGHT + MARGIN_TOP;

export const PaymentContainer = (props: PaymentProps) => {
  const [roomId, setRoomId] = useState('');
  const handleChangeRoomId = useCallback(
    (ev: ChangeEvent<{ value: unknown }>) =>
      setRoomId(ev.target.value as string),
    []
  );
  const { variant, isRoomsLoading, rooms, isRoomLoading, room } = props;
  const paymentRef = useRef<HTMLElement>(null);
  const initialOffsetYRef = useRef<number>(null);
  const [isFixed, setFixed] = useState(false);
  const desktopMatches = useMediaQuery(desktopQuery);
  const data = useMemo(() => {
    const isLoading = variant === 'studio' ? !rooms.length : !room.id;

    switch (variant) {
      case 'studio':
        return {
          isLoading: isRoomsLoading || isLoading,
          room: rooms.filter(roomItem => roomItem.id === roomId)[0],
        };
      case 'room':
        return { isLoading: isRoomLoading || isLoading, room };
      default:
        throw new Error();
    }
  }, [isRoomLoading, isRoomsLoading, roomId, room, rooms, variant]);
  const PaymentNode = useMemo(
    () => (
      <Payment
        largeTabletQuery={largeTabletQuery}
        room={data.room}
        isLoading={data.isLoading}
        rooms={rooms}
        roomId={roomId}
        handleChangeRoomId={handleChangeRoomId}
      />
    ),
    [data.isLoading, data.room, handleChangeRoomId, roomId, rooms]
  );

  useEffect(() => {
    const handleScroll = () => {
      const payment = paymentRef.current;
      const initialOffsetY = initialOffsetYRef.current;

      if (!initialOffsetY) {
        // @ts-ignore
        initialOffsetYRef.current = payment.offsetTop;
      }

      if (payment && initialOffsetY) {
        const scrollY = window.scrollY + SCROLL_OFFSET;
        const delta = initialOffsetY - scrollY;
        const nextState = delta < 0;

        if (nextState !== isFixed) {
          setFixed(nextState);
        }
      }
    };

    if (desktopMatches) {
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isFixed, desktopMatches]);

  useEffect(() => {
    if (variant === 'studio' && rooms.length) {
      setRoomId(rooms[0].id);
    }
  }, [rooms, variant]);

  return (
    <Wrapper ref={paymentRef} isFixed={isFixed} top={SCROLL_OFFSET}>
      <Hidden query="(min-width: 1101px)">
        <Container variant="secondary">
          <Grid
            container
            spacing={2}
            alignItems="center"
            justify="space-between"
          >
            {PaymentNode}
          </Grid>
        </Container>
      </Hidden>
      <Hidden query="(max-width: 1100px)">
        <Grid container spacing={2} alignItems="center" justify="space-between">
          {PaymentNode}
        </Grid>
      </Hidden>
    </Wrapper>
  );
};
