import styled from 'styled-components';
import { ComponentType } from 'react';
import { Container as DefaultContainer } from '@material-ui/core';
import { ContainerProps } from '@material-ui/core/Container';

export const Container = styled<ComponentType<ContainerProps>>(
  DefaultContainer
)`
  && {
    width: 100%;
    max-width: 1440px;
  }
`;
