import React, { memo, useMemo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { StudioListItemTypesProps } from './index';
import { mergeIdWithConfig } from '../../../utils/mergeIdWithConfig';

const _StudioListItemInteriors = ({
  interiorIds,
  isLoading,
  list,
}: StudioListItemTypesProps) => {
  const interiorList = useMemo(
    () => mergeIdWithConfig<typeof list[number]>(interiorIds, list),
    [interiorIds, list]
  );

  if (isLoading) {
    return <span>Interiors is loading</span>;
  }

  return (
    <Grid container>
      <Typography component="span" variant="caption">
        {interiorIds.map(id => interiorList[id].value).join(', ')}
      </Typography>
    </Grid>
  );
};

export const StudioListItemInteriors = memo(_StudioListItemInteriors);
