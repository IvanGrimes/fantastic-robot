import React, { useEffect, useRef, useState } from 'react';
import { Grid } from '@material-ui/core';
import { useMediaQuery } from '@modules/ui/hooks';
import { Container, Hidden } from '@modules/ui';
import { Wrapper } from './Payment.styles';
import { Payment, PaymentProps as PaymentComponentProps } from './Payment';

export type PaymentProps = Omit<PaymentComponentProps, 'largeTabletQuery'>;

const desktopQuery = '(min-width: 1100px)';
const largeTabletQuery = '(max-width: 1100px)';
const HEADER_HEIGHT = 128;
const MARGIN_TOP = 32;
const SCROLL_OFFSET = HEADER_HEIGHT + MARGIN_TOP;

export const PaymentContainer = (props: PaymentProps) => {
  const paymentRef = useRef<HTMLElement>(null);
  const initialOffsetYRef = useRef<number>(null);
  const [isFixed, setFixed] = useState(false);
  const desktopMatches = useMediaQuery(desktopQuery);

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
            <Payment largeTabletQuery={largeTabletQuery} {...props} />
          </Grid>
        </Container>
      </Hidden>
      <Hidden query="(max-width: 1100px)">
        <Grid container spacing={2} alignItems="center" justify="space-between">
          <Payment largeTabletQuery={largeTabletQuery} {...props} />
        </Grid>
      </Hidden>
    </Wrapper>
  );
};
