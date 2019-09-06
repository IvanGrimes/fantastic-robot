import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import ContentLoader from 'react-content-loader';
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

const _StudioListItem = (props: StudioListItemProps) => {
  const { variant, handleToggleFavorite } = props;

  return (
    <Card isDisabled={props.loading}>
      <Grid item sm={variant === 'wide' ? 5 : 12} xs={12}>
        <Grid container>
          {props.loading ? (
            <ContentLoader
              height={200}
              style={{ height: '200px', width: '100%' }}
            >
              <rect x="0" y="0" rx="0" ry="0" width="100%" height="200px" />
            </ContentLoader>
          ) : (
            <StudioListItemPhotos photos={props.photos} />
          )}
        </Grid>
      </Grid>
      <Grid container item sm={variant === 'wide' ? 7 : 12} xs={12}>
        <Grid
          component={CardContent}
          container
          direction="column"
          justify="space-between"
          spacing={2}
        >
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              {props.loading ? (
                <ContentLoader
                  width={220}
                  height={20}
                  style={{ height: '20px' }}
                >
                  <rect x="0" y="0" rx="0" ry="0" width="100%" height="20px" />
                </ContentLoader>
              ) : (
                <StudioListItemTitle name={props.name} />
              )}
            </Grid>
            <Grid item>
              {props.loading ? (
                <ContentLoader
                  width={30}
                  height={20}
                  style={{ height: '20px' }}
                >
                  <rect x="0" y="0" rx="0" ry="0" width="100%" height="20px" />
                </ContentLoader>
              ) : (
                <FavoriteButton
                  id={props.id}
                  isActive={props.favorite}
                  handleToggleFavorite={handleToggleFavorite}
                />
              )}
            </Grid>
            <Grid item xs={12}>
              {props.loading ? (
                <ContentLoader height={18} style={{ height: '18px' }}>
                  <rect x="0" y="0" rx="0" ry="0" width="40%" height="18px" />
                </ContentLoader>
              ) : (
                <StudioListItemTypes types={props.types} />
              )}
            </Grid>
            {props.loading ? (
              <ContentLoader height={18} style={{ height: '18px' }}>
                <rect x="0" y="0" rx="0" ry="0" width="60.75%" height="18px" />
              </ContentLoader>
            ) : (
              <StudioListItemRooms roomsCount={props.roomsCount} />
            )}
          </Grid>
          <CardBottomGrid
            container
            justify="space-between"
            alignItems="flex-end"
          >
            <Grid item xs={6}>
              {props.loading ? (
                <ContentLoader height={42} style={{ height: '42px' }}>
                  <rect
                    x="0"
                    y="20px"
                    rx="0"
                    ry="0"
                    width="35%"
                    height="22px"
                  />
                </ContentLoader>
              ) : (
                <StudioListItemStations stations={props.stations} />
              )}
            </Grid>
            <Grid item>
              {props.loading ? (
                <ContentLoader
                  width={45}
                  height={42}
                  style={{ height: '42px' }}
                >
                  <rect
                    x="0"
                    y="20px"
                    rx="0"
                    ry="0"
                    width="100%"
                    height="22px"
                  />
                </ContentLoader>
              ) : (
                <StudioListItemPriceSegment
                  priceSegment={props.priceSegments}
                />
              )}
            </Grid>
          </CardBottomGrid>
        </Grid>
      </Grid>
    </Card>
  );
};

export const StudioListItem = memo(_StudioListItem);
