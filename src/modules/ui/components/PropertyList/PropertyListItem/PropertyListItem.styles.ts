import styled from 'styled-components';
import { ComponentType } from 'react';
import { GridProps } from '@material-ui/core/Grid';
import { Grid } from '@material-ui/core';

export const ClickableGrid = styled<ComponentType<GridProps>>(Grid)`
  && {
    cursor: pointer;
  }
`;
