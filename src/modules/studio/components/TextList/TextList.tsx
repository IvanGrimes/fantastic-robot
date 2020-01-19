import React, { ReactNode } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Loader } from '@modules/ui';
import { getSize, Size } from '../../utils/size';
import { useConfig } from '../../hooks/useConfig';

export type TextListProps = {
  loading: boolean;
  list?: { id: string; value: string }[] | [];
  ids: string[];
  className?: string;
  size?: Size;
  skeleton?: ReactNode;
};

export const TextList = ({
  className = '',
  ids,
  list = [],
  loading,
  size = 'normal',
  skeleton = <Loader width="55%" height="10px" top="7px" />,
}: TextListProps) => {
  const configList = useConfig({ idList: ids, configList: list });

  return (
    <Grid container className={className}>
      {loading || !ids.length || !list ? (
        skeleton
      ) : (
        <Typography component="span" variant={getSize(size)}>
          {configList.map(({ value }) => value).join(', ')}
        </Typography>
      )}
    </Grid>
  );
};
