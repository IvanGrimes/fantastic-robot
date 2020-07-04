import { css } from 'styled-components';

type Direction = 'top' | 'right' | 'bottom' | 'left';

export const getShading = ({
  direction = 'bottom',
  top = '20px',
  bottom = '90%',
}: {
  direction?: Direction;
  top?: string;
  bottom?: string;
} = {}) => css`
  mask-image: linear-gradient(
    to ${direction},
    transparent,
    black ${top},
    black ${bottom},
    transparent
  );
`;
