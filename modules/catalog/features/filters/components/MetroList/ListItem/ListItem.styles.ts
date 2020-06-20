import styled, { css } from 'styled-components';
import { listItemPadding } from '../../ParameterList';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - ${listItemPadding}) !important;
`;

export const StationColor = styled.div<{ color: string }>`
  ${({ color }) => css`
    display: flex;
    min-width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${color};
  `};
`;
