import styled, { css } from 'styled-components';
import { grey, blueGrey } from '@material-ui/core/colors';
import { ArrowForward } from '@material-ui/icons';
import { transparentize } from 'polished';

export const Wrapper = styled.div`
  && {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    border: 1px solid ${grey.A100};
    border-radius: 4px;
  }
`;

export const Label = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  width: 120px;
  height: 80%;
  cursor: pointer;
  margin: 0 8px;
  padding: 0 8px;
  border-radius: 4px;
  background-color: transparent;
  transition: background-color 150ms linear;
  user-select: none;
  ${({ isActive }) =>
    isActive
      ? css`
          background-color: ${blueGrey['50']};
        `
      : css`
          &:hover {
            background-color: ${transparentize(0.5, blueGrey['50'])};
          }
        `};
`;

export const Icon = styled(ArrowForward)`
  && {
    color: ${grey.A200};
  }
`;
