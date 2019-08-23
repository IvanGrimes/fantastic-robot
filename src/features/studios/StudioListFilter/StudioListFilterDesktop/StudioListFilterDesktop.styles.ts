import styled from 'styled-components';
import { Paper, Grid } from '@material-ui/core';
import { em } from 'polished';
import { ComponentType } from 'react';
import { GridProps } from '@material-ui/core/Grid';

export const Wrapper = styled(Paper)`
  && {
        padding: ${em(16)};
      }
`;

export const FilterGrid = styled<ComponentType<GridProps>>(Grid)`
  && {
    margin-bottom: 0;
    overflow: hidden;
  }
`;

export const FilterItemGrid = styled<ComponentType<GridProps>>(Grid)`
  && {
    align-self: stretch;
  }
`;
