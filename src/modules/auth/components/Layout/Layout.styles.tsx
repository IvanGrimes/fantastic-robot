import React, { ComponentType } from 'react';
import { Container as DefaultContainer, ContainerProps } from '@modules/ui';
import styled from 'styled-components';

export const Container = styled<ComponentType<ContainerProps>>(props => (
  <DefaultContainer {...props} variant="secondary" />
))``;
