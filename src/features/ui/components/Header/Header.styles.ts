import { Grid, Toolbar as DefaultToolbar } from '@material-ui/core';
import styled from 'styled-components';
import { ComponentType } from 'react';
import { ToolbarProps } from '@material-ui/core/Toolbar';
import { GridProps } from '@material-ui/core/Grid';

export const HeaderGrid = styled<ComponentType<GridProps>>(Grid)`
  && {
    z-index: 1;
  }
`;

export const Toolbar = styled<ComponentType<ToolbarProps>>(DefaultToolbar)`
  && {
    padding: 0;
  }
`;
