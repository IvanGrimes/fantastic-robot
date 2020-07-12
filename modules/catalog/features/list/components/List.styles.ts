import styled from 'styled-components';
import {
  Grid,
  GridProps,
  InfiniteScroll as DefaultInfiniteScroll,
  InfiniteScrollProps,
} from '@components';

export const GridList = styled(Grid)<GridProps>`
  && {
    margin-top: 32px;
  }
`;

export const InfiniteScroll = styled(DefaultInfiniteScroll)<
  InfiniteScrollProps
>`
  && {
    width: 100%;
  }
`;
