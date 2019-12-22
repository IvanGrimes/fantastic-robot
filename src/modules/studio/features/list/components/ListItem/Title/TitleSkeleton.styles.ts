import styled from 'styled-components';
import { ComponentType } from 'react';
import {
  Loader as DefaultLoader,
  LoaderProps,
} from '@modules/ui/components/Loader';

export const Loader = styled<ComponentType<LoaderProps>>(DefaultLoader)`
  && {
    margin-top: 1px;
  }
`;
