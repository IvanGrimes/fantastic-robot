import React, { memo } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Tooltip,
} from '@material-ui/core';
import { MeetingRoom } from '@material-ui/icons';
import { Station } from './StudioListItem.styles';
import { StudioListItemProps } from './index';
import { LazyImage } from '../../../components/LazyImage';
import { Carousel } from '../../../components/Carousel';
import { floatToFraction } from '../../../lib/floatToFraction';
import { StudioListItemFavorite } from './StudioListItemFavorite';
import { getPriceSegment } from '../../../lib/getPriceSegment';
import { StudioListParameters } from './StudioListParameters';

const _StudioListItem = ({
  id: studioId,
  photos,
  name,
  description,
  priceSegment,
  types,
  stations,
  roomsCount,
  favorite,
}: StudioListItemProps) => {
  if (
    !studioId ||
    !photos ||
    !name ||
    !description ||
    !priceSegment ||
    !types ||
    !stations ||
    !roomsCount ||
    typeof favorite === 'undefined'
  ) {
    return <p>Here will be content placeholder</p>;
  }

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
          <Grid item xs={9} container alignItems="center" spacing={4}>
            <Grid item>
              <Typography variant="h5" component="h2">
                {name}
              </Typography>
            </Grid>
            <Grid container item xs={4} alignItems="center" spacing={1}>
              <Grid item>
                <Tooltip title="Количество залов">
                  <Grid container>
                    <MeetingRoom /> <Typography>{roomsCount}</Typography>
                  </Grid>
                </Tooltip>
              </Grid>
              <Grid item>
                <StudioListItemFavorite id={studioId} isActive={favorite} />
              </Grid>
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
          <Grid container alignItems="flex-start" justify="space-between">
            <Grid component="ul" item xs={4}>
              <StudioListParameters
                parameter="station"
                list={stations}
                renderName={({ color, name: stationName }) => (
                  <Station color={color}>{stationName}</Station>
                )}
              />
            </Grid>
            <StudioListParameters
              parameter="type"
              list={types}
              justify="flex-end"
              spacing={2}
              xs={7}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export const StudioListItem = memo(_StudioListItem);
