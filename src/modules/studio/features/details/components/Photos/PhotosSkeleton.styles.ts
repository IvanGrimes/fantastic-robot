import styled from 'styled-components';
import { floatToFraction } from '@utils/floatToFraction';
import { ComponentType } from 'react';
import {
  Loader as DefaultLoader,
  LoaderProps,
} from '@modules/ui/components/Loader';

export const Wrapper = styled.div`
  position: relative;
  padding-bottom: ${100 / floatToFraction(16.9)}%;
  width: 100%;
`;

export const Loader = styled<ComponentType<LoaderProps>>(DefaultLoader)`
  && {
    position: absolute;
  }
`;
