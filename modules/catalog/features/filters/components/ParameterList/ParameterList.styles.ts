import styled from 'styled-components';
import { Grid, GridProps } from '@components';
import { listItemPadding, maxHeight } from './constants';

export const List = styled(Grid)<GridProps>`
  && {
    margin-left: -${listItemPadding};
    width: calc(100% + ${listItemPadding});
    max-height: ${maxHeight}px;
    overflow: auto;
  }
`;
