import React, { ComponentType } from 'react';
import styled, { css } from 'styled-components';
import { HiddenProps } from '@material-ui/core/Hidden';
import { Hidden as DefaultHidden } from '@material-ui/core';

export const Hidden = styled<
  ComponentType<HiddenProps & { query: string; fluid: boolean }>
>(({ query, fluid, ...props }) => <DefaultHidden {...props} />)`
  ${({ query, fluid }) => css`
    ${query &&
      css`
        @media screen and ${query} {
          display: none !important;
        }
      `};
    ${fluid &&
      css`
        width: 100%;
      `};
  `};
`;
