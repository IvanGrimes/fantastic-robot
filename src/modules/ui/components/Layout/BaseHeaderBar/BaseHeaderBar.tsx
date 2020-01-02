import React, { ReactNode } from 'react';
import { Grid } from '@material-ui/core';
import { Container } from '@modules/ui';
import { BarWrapper } from './BaseHeaderBat.styles';

export type BaseHeaderBarProps = {
  className?: string;
  show: boolean;
  children: ReactNode | ReactNode[];
};

export const BaseHeaderBar = ({
  className = '',
  show,
  children,
}: BaseHeaderBarProps) => {
  if (!show) {
    return null;
  }

  return (
    <Grid container className={className}>
      <BarWrapper>
        <Container variant="fluid">{children}</Container>
      </BarWrapper>
    </Grid>
  );
};
