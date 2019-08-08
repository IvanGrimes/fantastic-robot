import React, { memo } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Tooltip,
} from '@material-ui/core';
import { ChipGrid, Chip, Station } from './StudioListItem.styles';
import { StudioListItemProps } from './index';
import { LazyImage } from '../../LazyImage';
import { Carousel } from '../../Carousel';
import { floatToFraction } from '../../../lib/floatToFraction';
import { MeetingRoom } from '@material-ui/icons';

const getPriceSegment = (priceSegment: number) =>
  new Array(priceSegment).fill('$');

const _StudioListItem = ({
  photos,
  name,
  description,
  priceSegment,
  types,
  stations,
  roomsCount,
}: StudioListItemProps) => {
  console.log(stations);

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
      <CardContent>
        <Grid container justify="space-between" alignItems="center" spacing={2}>
          <Grid item xs={6} container alignItems="center" spacing={4}>
            <Grid item>
              <Typography variant="h5" component="h2">
                {name}
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip title="Количество комнат">
                <Grid container>
                  <MeetingRoom /> <Typography>{roomsCount}</Typography>
                </Grid>
              </Tooltip>
            </Grid>
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
          <Grid component="ul" item>
            {stations.map(({ id, color, name: station }) => (
              <Station key={id} color={color}>
                <Typography variant="caption">{station}</Typography>
              </Station>
            ))}
          </Grid>
          <ChipGrid container item xs={7} justify="flex-end">
            {types.map(({ id, name: type }) => (
              <Chip key={id} label={type} size="small" />
            ))}
          </ChipGrid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export const StudioListItem = memo(_StudioListItem);
