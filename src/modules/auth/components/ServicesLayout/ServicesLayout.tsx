import React, { ReactNode } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { ContentGrid, Separator } from '../index';
import { Layout, LayoutProps } from '../Layout';

export type ServicesLayoutProps = LayoutProps & {
  services: ReactNode | ReactNode[];
  description: ReactNode | ReactNode[];
};

export const ServicesLayout = ({
  children,
  services,
  description,
}: ServicesLayoutProps) => (
  <Layout>
    <ContentGrid container alignItems="center">
      <Grid container spacing={3}>
        <Grid container item spacing={3}>
          {services}
        </Grid>
        {children}
        <Grid container item>
          <Separator />
        </Grid>
        <Grid container item>
          <Typography variant="body1">{description}</Typography>
        </Grid>
      </Grid>
    </ContentGrid>
  </Layout>
);
