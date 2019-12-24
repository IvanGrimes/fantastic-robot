import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { GridProps } from '@material-ui/core/Grid';
import { ComponentType } from 'react';

export const DescriptionGrid = styled<ComponentType<GridProps>>(Grid)`
  && {
    margin-top: 24px;
  }
`;
