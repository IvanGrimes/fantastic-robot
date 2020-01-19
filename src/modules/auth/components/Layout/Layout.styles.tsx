import React, { ComponentType } from 'react';
import * as ui from '@modules/ui';
import styled from 'styled-components';

const { Container: DefaultContainer } = ui

export const Container = styled<ComponentType<ui.ContainerProps>>(props => (
  <DefaultContainer {...props} />
))`
  && {
    max-width: 600px;
    margin-top: -64px;
  }
`;
