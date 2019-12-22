import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { TextListSkeleton } from './TextListSkeleton';
import { getSize, Size } from '../../utils/size';
import { useConfig } from '../../hooks/useConfig';

export type TextListProps = {
  loading: boolean;
  list?: { id: string; value: string }[] | [];
  ids: string[];
  className?: string;
  size?: Size;
};

export const TextList = ({
  className = '',
  ids,
  list = [],
  loading,
  size = 'normal',
}: TextListProps) => {
  const configList = useConfig({ idList: ids, configList: list });

  if (loading) {
    return <TextListSkeleton />;
  }

  return (
    <Grid container className={className}>
      <Typography component="span" variant={getSize(size)}>
        {configList.map(({ value }) => value).join(', ')}
      </Typography>
    </Grid>
  );
};
