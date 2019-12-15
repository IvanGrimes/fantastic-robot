import React, { useMemo, Fragment } from 'react';
import { Arrow, Button } from './DirectionButton.styles';

export type Direction = 'left' | 'right';

type Props = {
  direction: Direction;
  double?: boolean;
  onClick: () => void;
};

export const DirectionButton = ({ direction, double, onClick }: Props) => {
  const arrows = useMemo(() => {
    if (double) {
      switch (direction) {
        case 'left':
          return (
            <Fragment>
              <Arrow direction={direction} left={3} />
              <Arrow direction={direction} left={-4} />
            </Fragment>
          );
        case 'right':
          return (
            <Fragment>
              <Arrow direction={direction} left={-3} />
              <Arrow direction={direction} left={4} />
            </Fragment>
          );
        default:
          return null;
      }
    }

    return <Arrow direction={direction} />;
  }, [direction, double]);

  return <Button onClick={onClick}>{arrows}</Button>;
};
