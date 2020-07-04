import styled, { css } from 'styled-components';
import { Grid, GridProps } from '@components';
import { getShading, hideScrollbar } from '@utils';
import { LIST_ITEM_PADDING, MAX_HEIGHT } from './constants';

export const List = styled(Grid)<GridProps & { hasOverflow: boolean }>`
  ${({ hasOverflow }) => css`
    && {
      margin-left: -${LIST_ITEM_PADDING};
      width: calc(100% + ${LIST_ITEM_PADDING});
      max-height: ${MAX_HEIGHT}px;
      overflow: auto;
      ${hideScrollbar};
      ${hasOverflow &&
      css`
        ${getShading({ bottom: '85%' })};
        & > li:last-child {
          padding-bottom: 20px;
        }
      `};
    }
  `};
`;
