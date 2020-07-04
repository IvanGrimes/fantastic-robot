import styled, { css } from 'styled-components';
import { LIST_ITEM_PADDING } from '../../ParameterList';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - ${LIST_ITEM_PADDING}) !important;
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
