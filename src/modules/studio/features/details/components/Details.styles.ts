import styled from 'styled-components';
import { ComponentType } from 'react';
import { GridProps } from '@material-ui/core/Grid';
import { Grid } from '@material-ui/core';

export const MainGrid = styled<ComponentType<GridProps>>(Grid)`
  && {
    margin-top: 48px;
    padding-bottom: 120px;
  }
`;
