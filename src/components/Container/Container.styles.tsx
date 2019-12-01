import styled, { css } from 'styled-components';
import React, { ComponentType } from 'react';
import { Container as DefaultContainer } from '@material-ui/core';
import { ContainerProps } from '@material-ui/core/Container';

export const Container = styled<
  ComponentType<ContainerProps & { fluid?: boolean }>
>(({ fluid, ...props }) => <DefaultContainer {...props} />)`
  ${({ fluid = false }) => css`
    && {
      width: 100%;
      max-width: ${fluid ? '100%' : '1440px'};
    }
  `}
`;
