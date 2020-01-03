import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Block } from '../Block';

type DescriptionProps = {
  isLoading: boolean;
  content?: string;
};

export const Description = ({ isLoading, content }: DescriptionProps) => {
  if (typeof content === 'undefined') {
    return null;
  }

  return (
    <Block isLoading={isLoading || !content.length}>
      <Grid item>
        <Typography>{content}</Typography>
      </Grid>
    </Block>
  );
};
