import styled from 'styled-components';
import { ComponentType } from 'react';
import {
  Loader as DefaultLoader,
  LoaderProps,
} from '../../../../../components/Loader';

export const Loader = styled<ComponentType<LoaderProps>>(DefaultLoader)`
  && {
    margin-top: 1px;
  }
`;
