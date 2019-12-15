import React from 'react';
import { Grid } from '@material-ui/core';
import { Photos } from './Photos';

export type HeroProps = {
  isPhotosLoading: boolean;
  photoIds: string[];
};

export const Hero = ({ isPhotosLoading, photoIds }: HeroProps) => {
  return (
    <Grid container item xs={12}>
      <Photos isLoading={isPhotosLoading} photoIds={photoIds} />
    </Grid>
  );
};
