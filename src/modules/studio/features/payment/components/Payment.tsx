import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as details from '@modules/studio/features/details';
import { CalendarProvider } from '@modules/studio/features/calendar';
import { Grid } from '@material-ui/core';
import { Wrapper } from './Payment.styles';
import { StudioPayment } from './StudioPayment';
import { RoomPayment } from './RoomPayment';

export type PaymentProps =
  | {
      variant: 'studio';
      isRoomsLoading: boolean;
      rooms: ReturnType<typeof details.selectors.getRooms>;
    }
  | {
      variant: 'room';
      isRoomLoading: boolean;
      room: ReturnType<typeof details.selectors.getRoomById>;
    };

const HEADER_HEIGHT = 70.5;
const MARGIN_TOP = 32;
const SCROLL_OFFSET = HEADER_HEIGHT + MARGIN_TOP;

export const Payment = (props: PaymentProps) => {
  const paymentRef = useRef<HTMLElement>(null);
  const initialOffsetYRef = useRef<number>(null);
  const [isFixed, setFixed] = useState(false);
  const PaymentNode = useMemo(() => {
    switch (props.variant) {
      case 'studio':
        return (
          <StudioPayment
            isRoomsLoading={props.isRoomsLoading}
            rooms={props.rooms}
          />
        );
      case 'room':
        return (
          <RoomPayment isRoomLoading={props.isRoomLoading} room={props.room} />
        );
      default:
        return null;
    }
  }, [props]);

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

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFixed]);

  return (
    <Wrapper ref={paymentRef} isFixed={isFixed} top={SCROLL_OFFSET}>
      <CalendarProvider
        reservations={{}}
        workHours={{}}
        fixedStep={0}
        multipleSelect={false}
      >
        <Grid container spacing={2}>
          {PaymentNode}
        </Grid>
      </CalendarProvider>
    </Wrapper>
  );
};
