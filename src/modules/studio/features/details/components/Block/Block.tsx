import React, { ReactNode } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { MainGrid } from './Block.styles';

export type BlockProps = {
  isLoading?: boolean;
  title?: string;
  children: ReactNode | ReactNode[];
};

export const Block = ({
  isLoading = false,
  title = '',
  children,
}: BlockProps) => {
  if (isLoading) {
    return (
      <MainGrid container spacing={2}>
        loading
      </MainGrid>
    );
  }

  return (
    <MainGrid container spacing={2}>
      {title && (
        <Grid container item>
          <Typography variant="h6">{title}</Typography>
        </Grid>
      )}
      <Grid container item spacing={1}>
        {children}
      </Grid>
    </MainGrid>
  );
};
