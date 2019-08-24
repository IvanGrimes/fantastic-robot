import React, { memo } from 'react';
import { Typography, Grid } from '@material-ui/core';
import { StudioListItemProps } from './index';
import { LazyImage } from '../../../../../components/LazyImage';
import { Carousel } from '../../../../../components/Carousel';
import { floatToFraction } from '../../../../../utils/floatToFraction';
import { getDeclension } from '../../../../../utils/getDeclension';
import {
  Card,
  CardBottomGrid,
  CardContent,
  FavoriteButton,
  Station,
} from './StudioListItem.styles';
import { getPriceSegment } from '../../../../../utils/getPriceSegment';

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
    <Grid container component={Card}>
      <Grid item xs={4}>
        <Grid item xs={12}>
          <Carousel>
            {photos.map(({ id, ratio }) => (
              <LazyImage
                key={id}
                src={`https://via.placeholder.com/${id}`}
                ratio={floatToFraction(ratio)}
              />
            ))}
          </Carousel>
        </Grid>
      </Grid>
      <Grid container item xs={8}>
        <Grid
          component={CardContent}
          container
          direction="column"
          justify="space-between"
          spacing={2}
        >
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <Typography variant="h5" component="h2">
                {name}
              </Typography>
            </Grid>
            <Grid item>
              <FavoriteButton id={studioId} isActive={favorite} />
            </Grid>
            <Grid item xs={12}>
              <Typography component="span" variant="caption">
                {types.map(({ name: type }) => type).join(', ')}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography component="span" variant="caption">
                {roomsCount}{' '}
                {getDeclension(roomsCount, ['зал', 'зала', 'залов'])}
              </Typography>
            </Grid>
          </Grid>
          <CardBottomGrid
            container
            justify="space-between"
            alignItems="flex-end"
          >
            <Grid item xs={6}>
              <Grid component="ul" container alignItems="center" spacing={1}>
                {stations.map(({ name: station, color }) => (
                  <Grid component="li" key={station} item>
                    <Station color={color}>
                      <Typography component="span" variant="caption">
                        {station}
                      </Typography>
                    </Station>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item>
              <Typography component="span" variant="h6">
                {getPriceSegment(priceSegment)}
              </Typography>
            </Grid>
          </CardBottomGrid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export const StudioListItem = memo(_StudioListItem);
