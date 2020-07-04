import styled from 'styled-components';
import { Grid, GridProps } from '@components';
import { LIST_ITEM_PADDING } from '../constants';

export const Wrapper = styled(Grid)<GridProps>`
  && {
    padding-left: ${LIST_ITEM_PADDING};
  }
`;
