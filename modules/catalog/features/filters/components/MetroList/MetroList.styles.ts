import styled from 'styled-components';
import {
  VirtualizedList as DefaultVirtualizedList,
  VirtualizedListProps,
} from '@components';
import { getShading, hideScrollbar } from '@utils';
import { LIST_ITEM_PADDING } from '../ParameterList';

export const VirtualizedList = styled(DefaultVirtualizedList)<
  VirtualizedListProps
>`
  && {
    list-style-type: none;
    margin-left: -${LIST_ITEM_PADDING};
    ${hideScrollbar};
    ${getShading({ top: '40px', bottom: '80%' })}
  }
`;
