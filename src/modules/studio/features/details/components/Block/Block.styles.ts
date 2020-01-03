import styled from 'styled-components';
import { ComponentType } from 'react';
import { GridProps } from '@material-ui/core/Grid';
import { Grid } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export const MainGrid = styled<ComponentType<GridProps>>(Grid)`
  && {
    position: relative;
    margin-top: 16px;
    & > :first-child {
      margin-top: 4px;
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 8px;
      width: calc(100% - 16px);
      height: 1px;
      background-color: ${grey.A100};
    }
  }
`;
