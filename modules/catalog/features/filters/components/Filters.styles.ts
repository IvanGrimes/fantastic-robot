import styled from 'styled-components';
import { Paper, PaperProps } from '@components';

export const List = styled.ul`
  && {
    margin-top: 8px;
  }
`;

export const ListItem = styled(Paper)<PaperProps>`
  &&& {
    margin-top: 24px;
    padding: 6px 8px;
  }
`;
