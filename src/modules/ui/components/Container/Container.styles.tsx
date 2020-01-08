import styled, { css } from 'styled-components';
import React, { ComponentType } from 'react';
import { Container as DefaultContainer } from '@material-ui/core';
import { ContainerProps as DefaultContainerProps } from '@material-ui/core/Container';

export type ContainerProps = DefaultContainerProps & {
  variant?: 'fluid' | 'primary' | 'secondary';
};

export const Container = styled<ComponentType<ContainerProps>>(
  ({ variant, ...props }) => <DefaultContainer {...props} />
)`
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
              @media screen and (max-width: 1100px) {
                max-width: 720px;
              }
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
