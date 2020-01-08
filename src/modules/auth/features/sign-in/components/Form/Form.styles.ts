import { Link as DefaultLink, LinkProps } from '@modules/ui';
import styled from 'styled-components';
import { ComponentType } from 'react';

export const Link = styled<ComponentType<LinkProps>>(DefaultLink)`
  && {
    display: flex;
    width: 100%;
  }
`;
