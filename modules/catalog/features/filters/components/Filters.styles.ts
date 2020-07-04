import styled from 'styled-components';
import { Paper, PaperProps } from '@components';
import { getShading, hideScrollbar } from '@utils';

export const GridPaper = styled(Paper)<PaperProps>`
  &&& {
    padding-top: 56px;
    max-height: calc(100vh - 32px);
    overflow: auto;
    ${hideScrollbar};
    ${getShading({ top: '85px', bottom: '95%' })};
  }
`;
