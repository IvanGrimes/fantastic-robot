import React, { ComponentType } from 'react';
import { Container as DefaultContainer, ContainerProps } from '@modules/ui';
import styled from 'styled-components';

export const Container = styled<ComponentType<ContainerProps>>(props => (
  <DefaultContainer {...props} />
))`
  && {
    max-width: 600px;
    margin-top: -64px;
  }
`;