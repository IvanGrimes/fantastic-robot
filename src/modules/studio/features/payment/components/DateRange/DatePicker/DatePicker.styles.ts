import styled, { css } from 'styled-components';
import {
  CellProps,
  Cell as DefaultCell,
} from '@modules/studio/features/calendar';
import { ComponentType } from 'react';

export const Wrapper = styled.div<{ isVisible: boolean }>`
  ${({ isVisible }) => css`
    position: absolute;
    display: ${isVisible ? 'flex' : 'none'};
    top: calc(100% + 8px);
    left: 50%;
    width: 100%;
    max-width: 400px;
    transform: translate(-50%, 0);
    z-index: 5;
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
