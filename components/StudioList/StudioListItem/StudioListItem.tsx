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

const getPriceSegment = (priceSegment: number) =>
  new Array(priceSegment).fill('$');

const _StudioListItem = ({
  photos,
  name,
  description,
  priceSegment,
}: StudioListItemProps) => {
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
          <Grid container justify="space-between" alignItems="center" spacing={2}>
            <Grid item>
              <Typography variant="h5" component="h2">
                {name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5" component="span">
                {getPriceSegment(priceSegment)}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="textSecondary">
                {description}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export const StudioListItem = memo(_StudioListItem);
