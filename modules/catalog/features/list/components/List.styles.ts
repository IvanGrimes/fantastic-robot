import styled from 'styled-components';
import { Grid, GridProps } from '@components';
import { hideScrollbar } from '@utils';

export const GridList = styled(Grid)<GridProps>`
  && {
    margin-top: 32px;
    max-height: calc(100vh - 72px);
    overflow: auto;
    ${hideScrollbar};
  }
`;
