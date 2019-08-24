import React, { memo } from 'react';
import { Container, Grid } from '@material-ui/core';
import { BarWrapper } from './HeaderBar.styles';
import { HeaderBarProps } from './index';

const _HeaderBar = ({ children }: HeaderBarProps) => (
  <Grid container>
    <BarWrapper>
      <Container>{children}</Container>
    </BarWrapper>
  </Grid>
);

export const HeaderBar = memo(_HeaderBar);
