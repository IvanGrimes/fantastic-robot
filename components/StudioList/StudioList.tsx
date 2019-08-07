import React, { memo } from 'react';
import { StudioListProps } from './index';
import { StudioListItem } from './StudioListItem';
import { Grid } from '@material-ui/core';

const _StudioList = ({ loading, error, list }: StudioListProps) => {
  if (loading) {
    return <p>loading</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Grid component="ul" container spacing={4}>
      {list.map(item => (
        <Grid component="li" item xs={12}>
          <StudioListItem key={item.id} loading={loading} {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export const StudioList = memo(_StudioList);
