import React, { memo, useMemo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { mergeIdWithConfig } from '../../../utils/mergeIdWithConfig';
import { StudioListItemProps } from '../index';
import { DataState } from '../../../../data/model/reducer';
import { TypesSkeleton } from './TypesSkeleton';

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
      list ? mergeIdWithConfig<typeof list[number]>(interiorIds, list) : [],
    [interiorIds, list]
  );

  if (loading) {
    return <TypesSkeleton />;
  }

  return (
    <Grid container>
      <Typography component="span" variant="caption">
        {interiorList.map(({ value }) => value).join(', ')}
      </Typography>
    </Grid>
  );
};

export const Types = memo(_StudioListItemTypes);
