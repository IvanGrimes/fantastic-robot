import React, { ReactNode } from 'react';
import { Grid } from '@material-ui/core';
import { Container } from '@modules/ui';
import { BarWrapper } from './BaseHeaderBat.styles';

export type BaseHeaderBarProps = {
  show: boolean;
  children: ReactNode | ReactNode[];
};

export const BaseHeaderBar = ({ show, children }: BaseHeaderBarProps) => {
  if (!show) {
    return null;
  }

  return (
    <Grid container>
      <BarWrapper>
        <Container variant="fluid">{children}</Container>
      </BarWrapper>
    </Grid>
  );
};
