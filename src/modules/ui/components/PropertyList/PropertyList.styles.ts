import styled from 'styled-components';
import { ComponentType } from 'react';
import { GridProps } from '@material-ui/core/Grid';
import { Grid } from '@material-ui/core';
import { FixedSizeListProps } from 'react-window';
import dynamic from 'next/dynamic';

const FixedSizeList = dynamic<FixedSizeListProps>(() =>
  import('react-window').then(m => m.FixedSizeList)
);

export const WrapperGrid = styled<ComponentType<GridProps>>(Grid)`
  && {
    min-height: 100%;
    user-select: none;
  }
`;

export const SearchGrid = styled<ComponentType<GridProps>>(Grid)`
  && {
    margin-top: 12px;
  }
`;

export const VirtualList = styled<ComponentType<FixedSizeListProps>>(
  FixedSizeList
)`
  && {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
