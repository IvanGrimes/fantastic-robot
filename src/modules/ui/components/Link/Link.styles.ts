import styled, { css } from 'styled-components';
import { indigo } from '@material-ui/core/colors';
import { LinkVariant } from './index';

export const Link = styled.a<{ variant: LinkVariant; fluid: boolean }>`
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  ${({ fluid }) =>
    fluid &&
    css`
      display: flex;
      width: 100%;
    `};
  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          color: ${indigo['500']};
        `;
      case 'secondary':
      default:
        return css`
          color: #fff;
        `;
    }
  }}
`;
