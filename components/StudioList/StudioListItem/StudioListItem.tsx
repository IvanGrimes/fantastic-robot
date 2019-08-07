import React, { memo } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
} from '@material-ui/core';
import { StudioListItemProps } from './index';
import { LazyImage } from '../../LazyImage';
import { Carousel } from '../../Carousel';
import { floatToFraction } from '../../../lib/floatToFraction';

// TODO: Render image by ratio
// TODO: Add description in the type ShortStudio

const _StudioListItem = ({ photos, name }: StudioListItemProps) => {
  return (
    <Card>
      <Grid container>
        <Grid item xs={12}>
          <Carousel>
            {photos.map(({ id, ratio }, index) => (
              <LazyImage
                key={index}
                src={`https://via.placeholder.com/${id}`}
                ratio={floatToFraction(ratio)}
              />
            ))}
          </Carousel>
        </Grid>
      </Grid>
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
