import styled from 'styled-components';
import { Grid as DefaultGrid } from '@material-ui/core';
import { ComponentType } from 'react';
import { GridProps } from '@material-ui/core/Grid';

export const Grid = styled<ComponentType<GridProps>>(DefaultGrid)`
  && {
    position: relative;
  }
`;
