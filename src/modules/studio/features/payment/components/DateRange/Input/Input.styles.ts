import styled, { css } from 'styled-components';
import { grey, blueGrey } from '@material-ui/core/colors';
import { ArrowForward } from '@material-ui/icons';

export const Label = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  width: 120px;
  height: calc(100% - 10px);
  margin: 0 6px;
  padding: 0 8px;
  border-radius: 4px;
  background-color: transparent;
  transition: background-color 150ms linear;
  user-select: none;
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${blueGrey['50']};
    `};
`;

export const Wrapper = styled.div`
  && {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 42px;
    border: 1px solid ${grey.A100};
    border-radius: 4px;
    cursor: pointer;
    ${Label} {
      transition: opacity 150ms linear;
    }
    &:hover {
      ${Label} {
        opacity: 0.5;
      }
    }
  }
`;

export const Icon = styled(ArrowForward)`
  && {
    color: ${grey.A200};
  }
`;
