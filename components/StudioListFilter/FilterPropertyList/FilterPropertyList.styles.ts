import styled from 'styled-components';
import { ComponentType } from 'react';
import { GridProps } from '@material-ui/core/Grid';
import { Grid } from '@material-ui/core';

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
    & > * {
      margin-right: -20px;
      width: calc(100% + 20px);
    }
  }
`;
