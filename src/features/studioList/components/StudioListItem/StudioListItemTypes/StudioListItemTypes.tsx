import React, { memo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { StudioListItemTypesProps } from './index';

const _StudioListItemTypes = ({ types }: StudioListItemTypesProps) => {
  if (!types) {
    return null;
  }

  return (
    <Grid container>
      <Typography component="span" variant="caption">
        {types.map(({ name: type }) => type).join(', ')}
      </Typography>
    </Grid>
  );
};

export const StudioListItemTypes = memo(_StudioListItemTypes);
