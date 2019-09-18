import React, { memo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { StudioListItemTypesProps } from './index';

const _StudioListItemInteriors = ({
  interiorIds,
}: StudioListItemTypesProps) => (
  <Grid container>
    <Typography component="span" variant="caption">
      {interiorIds.map(id => id).join(', ')}
    </Typography>
  </Grid>
);

export const StudioListItemInteriors = memo(_StudioListItemInteriors);
