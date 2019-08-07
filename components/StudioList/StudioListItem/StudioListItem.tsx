import React, { memo } from 'react';
import { StudioListItemProps } from './index';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';
import { LazyImage } from "../../LazyImage";

// TODO: Add description in the type ShortStudio
// TODO: Add custom CardMedia
// TODO: Make option for CardMedia render this one as Slider

const _StudioListItem = ({ name }: StudioListItemProps) => {
  return (
    <Card>
      <LazyImage src="https://via.placeholder.com/400x200" height={200} />
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
