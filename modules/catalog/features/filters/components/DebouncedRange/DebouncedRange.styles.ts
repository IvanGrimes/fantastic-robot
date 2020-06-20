import styled, { css } from 'styled-components';
import { Typography, TypographyProps } from '@components';

export const Separator = styled(Typography)<
  TypographyProps & { disabled: boolean }
>`
  ${({ disabled }) => css`
    && {
      opacity: ${disabled ? 0.25 : 1};
    }
  `};
`;
