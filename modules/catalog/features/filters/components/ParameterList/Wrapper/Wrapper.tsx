import React, { FunctionComponent } from 'react';
import { Grid } from '@components';
import { ListGrid } from './Wrapper.styles';

export const Wrapper: FunctionComponent<{ title: string }> = ({
  title,
  children,
}) => (
  <Grid container item spacing={1}>
    <Grid container item>
      {title}
    </Grid>
    <ListGrid container item>
      {children}
    </ListGrid>
  </Grid>
);
