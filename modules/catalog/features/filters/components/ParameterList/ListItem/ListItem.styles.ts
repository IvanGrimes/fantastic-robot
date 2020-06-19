import styled from 'styled-components';
import { Grid, GridProps } from '@components';
import { listItemPadding } from '../constants';

export const Wrapper = styled(Grid)<GridProps>`
  && {
    padding-left: ${listItemPadding};
  }
`;
