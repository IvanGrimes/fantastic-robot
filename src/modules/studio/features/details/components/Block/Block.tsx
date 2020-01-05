import React, { ReactNode } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { MainGrid } from './Block.styles';

export type BlockProps = {
  isLoading?: boolean;
  title?: string;
  children: ReactNode | ReactNode[];
  skeleton?: ReactNode;
};

export const Block = ({
  isLoading = false,
  title = '',
  children,
  skeleton = null,
}: BlockProps) => {
  if (isLoading) {
    if (skeleton) {
      return (
        <MainGrid container spacing={2}>
          {skeleton}
        </MainGrid>
      );
    }

    return <>{skeleton}</>;
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
