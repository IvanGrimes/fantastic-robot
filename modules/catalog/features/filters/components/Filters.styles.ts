import styled from 'styled-components';
import { Paper, PaperProps, Grid, GridProps } from '@components';
import { getShading, hideScrollbar } from '@utils';

export const GridPaper = styled(Paper)<PaperProps>`
  &&& {
    position: relative;
  }
`;

export const GridHolder = styled(Grid)<GridProps>`
  && {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100vh;
    padding: 88px 24px 60px 24px;
    height: 100%;
    overflow: auto;
    ${hideScrollbar};
    ${getShading({ top: '16px', bottom: '90%' })};
  }
`;
