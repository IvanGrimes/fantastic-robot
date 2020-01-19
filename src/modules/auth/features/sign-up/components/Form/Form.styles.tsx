import styled, { css } from 'styled-components';
import { ComponentType } from 'react';
import {
  FormGrid as DefaultFormGrid,
  FormGridProps,
} from '../../../../components';

export const FormGrid = styled<
  ComponentType<FormGridProps & { isVisible: boolean }>
>(DefaultFormGrid)`
  ${({ isVisible }) => css`
    && {
      position: ${isVisible ? 'static' : 'absolute'};
      opacity: ${isVisible ? 1 : 0};
      transform: translate(0, ${isVisible ? 0 : -10000}px);
      transition: opacity 150ms linear,
        transform 0ms linear ${isVisible ? 0 : 150}ms;
    }
  `};
`;
