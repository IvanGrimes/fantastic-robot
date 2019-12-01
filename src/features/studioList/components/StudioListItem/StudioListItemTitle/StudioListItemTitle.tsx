import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { StudioListItemTitleProps } from './index';
import { StudioListItemProps } from '../index';
import { StudioListItemTitleSkeleton } from './StudioListItemTitleSkeleton';

export type StudioListItemTitleProps = { loading: boolean } & Pick<
  StudioListItemProps,
  'name'
>;

export const StudioListItemTitle = ({
  loading,
  name,
}: StudioListItemTitleProps) =>
  loading ? (
    <StudioListItemTitleSkeleton />
  ) : (
    <Grid container>
      <Typography variant="h5" component="h2">
        {name}
      </Typography>
    </Grid>
  );
