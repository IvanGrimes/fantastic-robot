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
  }
`;

export const SearchGrid = styled<ComponentType<GridProps>>(Grid)`
  && {
    margin-top: 12px;
  }
`;

export const ListGrid = styled<ComponentType<GridProps>>(Grid)`
  && {
    overflow: hidden;
    -webkit-mask-image: linear-gradient(
      to bottom,
      transparent,
      black 20px,
      black 90%,
      transparent
    );
  }
`;

export const ListScrollableGrid = styled<ComponentType<GridProps>>(Grid)`
  && {
    max-height: 400px;
    overflow-y: scroll;
    box-sizing: content-box;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    overflow-x: hidden;
  }
`;

export const VirtualList = styled<ComponentType<FixedSizeListProps>>(
  FixedSizeList
)`
  && {
    padding-right: calc(100% + 33px);
    overflow-x: hidden !important;
    margin-bottom: -20px;
  }
`;
