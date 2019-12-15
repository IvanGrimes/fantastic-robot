import styled, { css } from 'styled-components';
import React, { ComponentType } from 'react';
import { Container as DefaultContainer } from '@material-ui/core';
import { ContainerProps } from '@material-ui/core/Container';

export const Container = styled<
  ComponentType<
    ContainerProps & { variant?: 'fluid' | 'primary' | 'secondary' }
  >
>(({ variant, ...props }) => <DefaultContainer {...props} />)`
  ${({ variant = 'fluid' }) => css`
    && {
      width: 100%;
      ${() => {
        switch (variant) {
          case 'fluid':
            return css`
              max-width: 100%;
            `;
          case 'primary':
            return css`
              max-width: 1440px;
            `;
          case 'secondary':
            return css`
              max-width: 1080px;
            `;
          default:
            return css`
              max-width: 100%;
            `;
        }
      }};
    }
  `};
`;
