import React, { memo, useMemo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { StudioListItemTypesProps } from './index';
import { mergeIdWithConfig } from '../../../utils/mergeIdWithConfig';

const _StudioListItemInteriors = ({
  interiorIds,
  list,
}: StudioListItemTypesProps) => {
  const interiorList = useMemo(
    () => mergeIdWithConfig<typeof list[number]>(interiorIds, list),
    [interiorIds, list]
  );

  return (
    <Grid container>
      <Typography component="span" variant="caption">
        {interiorIds &&
          interiorIds.map(id => interiorList[id].value).join(', ')}
      </Typography>
    </Grid>
  );
};

export const StudioListItemInteriors = memo(_StudioListItemInteriors);
