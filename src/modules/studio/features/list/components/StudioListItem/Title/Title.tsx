import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { StudioListItemProps } from '../index';
import { TitleSkeleton } from './TitleSkeleton';

export type StudioListItemTitleProps = { loading: boolean } & Pick<
  StudioListItemProps,
  'name'
>;

export const Title = ({ loading, name }: StudioListItemTitleProps) =>
  loading ? (
    <TitleSkeleton />
  ) : (
    <Grid container>
      <Typography variant="h5" component="h2">
        {name}
      </Typography>
    </Grid>
  );
