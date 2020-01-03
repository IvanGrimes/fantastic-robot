import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { ListItemProps } from '../index';
import { TitleSkeleton } from './TitleSkeleton';

export type StudioListItemTitleProps = { loading: boolean } & Pick<
  ListItemProps,
  'name'
>;

export const Title = ({ loading, name }: StudioListItemTitleProps) =>
  loading ? (
    <TitleSkeleton />
  ) : (
    <Grid container>
      <Typography variant="h6" component="h2">
        {name}
      </Typography>
    </Grid>
  );
