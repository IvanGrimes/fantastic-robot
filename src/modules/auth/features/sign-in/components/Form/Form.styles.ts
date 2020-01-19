import * as ui from '@modules/ui';
import styled from 'styled-components';
import { ComponentType } from 'react';

const { Link: DefaultLink } = ui

export const Link = styled<ComponentType<ui.LinkProps>>(DefaultLink)`
  && {
    display: flex;
    width: 100%;
  }
`;
