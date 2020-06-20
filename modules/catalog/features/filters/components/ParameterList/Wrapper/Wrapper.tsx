import React, { FunctionComponent, ReactNode } from 'react';
import { Grid, Typography } from '@components';
import { ListGrid } from './Wrapper.styles';

export const Wrapper: FunctionComponent<{ title: ReactNode }> = ({
  title,
  children,
}) => (
  <Grid container item spacing={1}>
    <Grid container item>
      <Typography variant="caption" style={{ width: '100%' }}>
        {title}
      </Typography>
    </Grid>
    <ListGrid container item>
      {children}
    </ListGrid>
  </Grid>
);
