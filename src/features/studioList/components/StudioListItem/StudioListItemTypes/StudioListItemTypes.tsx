import React, { memo, useMemo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { StudioListItemTypesProps } from './index';
import { mergeIdWithConfig } from '../../../utils/mergeIdWithConfig';
import { StudioListItemProps } from '../index';
import { DataState } from '../../../../studioData/model/reducer';
import { StudioListItemTypesSkeleton } from './StudioListItemTypesSkeleton';

export type StudioListItemTypesProps = {
  loading: boolean;
  list?: DataState['config']['interior'];
} & Pick<StudioListItemProps, 'interiorIds'>;

const _StudioListItemTypes = ({
  loading,
  interiorIds,
  list,
}: StudioListItemTypesProps) => {
  const interiorList = useMemo(
    () =>
      list ? mergeIdWithConfig<typeof list[number]>(interiorIds, list) : {},
    [interiorIds, list]
  );

  if (loading) {
    return <StudioListItemTypesSkeleton />;
  }

  return (
    <Grid container>
      <Typography component="span" variant="caption">
        {interiorIds &&
          interiorIds.map(id => interiorList[id].value).join(', ')}
      </Typography>
    </Grid>
  );
};

export const StudioListItemTypes = memo(_StudioListItemTypes);
