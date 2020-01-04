import styled, { css } from 'styled-components';
import {
  CellProps,
  Cell as DefaultCell,
} from '@modules/studio/features/calendar';
import { ComponentType } from 'react';

export const Wrapper = styled.div<{ isVisible: boolean; x: number; y: number }>`
  ${({ isVisible, y, x }) => css`
    position: fixed;
    display: ${isVisible ? 'flex' : 'none'};
    top: ${y + 50}px;
    left: ${x}px;
    width: 100%;
    max-width: 306.67px;
    z-index: 2000;
  `};
`;

export const Cell = styled<ComponentType<CellProps>>(DefaultCell)`
  && {
    padding: 4px 0;
    &:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`;
