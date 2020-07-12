import styled from 'styled-components';
import {
  Grid,
  GridProps,
  Pagination as DefaultPagination,
  PaginationProps,
} from '@components';

export const GridList = styled(Grid)<GridProps>`
  && {
    margin-top: 32px;
  }
`;

export const Pagination = styled(DefaultPagination)<PaginationProps>`
  && {
    display: flex;
    justify-content: center;
    margin-top: 32px;
  }
`;
