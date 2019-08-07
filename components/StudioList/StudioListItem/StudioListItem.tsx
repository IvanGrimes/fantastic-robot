import React, { memo } from 'react';
import { StudioListItemProps } from './index';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

// TODO: Add description in the type ShortStudio
// TODO: Add custom CardMedia
// TODO: Make option for CardMedia render this one as Slider
// TODO: Add LazyImage

const _StudioListItem = ({ loading, name }: StudioListItemProps) => {
  if (loading) {
    return <p>loading</p>;
  }

  return (
    <Card>
      <CardMedia
        component="img"
        alt="name"
        image="https://via.placeholder.com/400x200"
        title={name}
      />
      <CardActionArea href="#">
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export const StudioListItem = memo(_StudioListItem);
