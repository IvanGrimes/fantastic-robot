import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Block } from '../Block';
import { useDetails } from '../DetailsContext';

export const Description = () => {
  const { variant, isStudioLoading, studio } = useDetails();

  if (variant !== 'studio') {
    return null;
  }

  return (
    <Block isLoading={isStudioLoading || !studio.description}>
      <Grid item>
        <Typography>{studio.description}</Typography>
      </Grid>
    </Block>
  );
};
