import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import { StudioListItemProps } from './index';
import {
  Card,
  CardBottomGrid,
  CardContent,
  FavoriteButton,
} from './StudioListItem.styles';
import { StudioListItemPhotos } from './StudioListItemPhoto';
import { StudioListItemTitle } from './StudioListItemTitle';
import { StudioListItemTypes } from './StudioListItemTypes';
import { StudioListItemRooms } from './StudioListItemRooms';
import { StudioListItemStations } from './StudioListItemStations';
import { StudioListItemPriceSegment } from './StudioListItemPriceSegment';

const _StudioListItem = ({
  variant,
  handleToggleFavorite,
  loading,
  name,
  types,
  roomsCount,
  priceSegment,
  stations,
  photos,
  favorite,
  description,
  id: studioId,
}: StudioListItemProps) => {
  if (
    loading ||
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
      <Grid item xs={variant === 'wide' ? 4 : 12}>
        <Grid item xs={12}>
          <StudioListItemPhotos photos={photos} />
        </Grid>
      </Grid>
      <Grid container item xs={variant === 'wide' ? 8 : 12}>
        <Grid
          component={CardContent}
          container
          direction="column"
          justify="space-between"
          spacing={2}
        >
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <StudioListItemTitle name={name} />
            </Grid>
            <Grid item>
              <FavoriteButton
                id={studioId}
                isActive={favorite}
                handleToggleFavorite={handleToggleFavorite}
              />
            </Grid>
            <Grid item xs={12}>
              <StudioListItemTypes types={types} />
            </Grid>
            <StudioListItemRooms roomsCount={roomsCount} />
          </Grid>
          <CardBottomGrid
            container
            justify="space-between"
            alignItems="flex-end"
          >
            <Grid item xs={6}>
              <StudioListItemStations stations={stations} />
            </Grid>
            <Grid item>
              <StudioListItemPriceSegment priceSegment={priceSegment} />
            </Grid>
          </CardBottomGrid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export const StudioListItem = memo(_StudioListItem);
