import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import ContentLoader from 'react-content-loader';
import { StudioListItemProps } from './index';
import { Card, CardBottomGrid, CardContent } from './StudioListItem.styles';
import { StudioListItemPhotos } from './StudioListItemPhoto';
import { StudioListItemTitle } from './StudioListItemTitle';
import { StudioListItemInteriors } from './StudioListItemTypes';
import { StudioListItemRooms } from './StudioListItemRooms';
import { StudioListItemStations } from './StudioListItemStations';
import { StudioListItemPriceType } from './StudioListItemPriceSegment';
import { StudioListItemStateProps } from './StudioListItemContainer';

const _StudioListItem = (
  props: StudioListItemProps & StudioListItemStateProps
) => {
  const { variant, metroList, isMetroListLoading } = props;

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
            <StudioListItemPhotos photoIds={props.photoIds} />
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
            <Grid item xs={12}>
              {props.loading ? (
                <ContentLoader height={18} style={{ height: '18px' }}>
                  <rect x="0" y="0" rx="0" ry="0" width="40%" height="18px" />
                </ContentLoader>
              ) : (
                <StudioListItemInteriors interiorIds={props.interiorIds} />
              )}
            </Grid>
            {props.loading ? (
              <ContentLoader height={18} style={{ height: '18px' }}>
                <rect x="0" y="0" rx="0" ry="0" width="60.75%" height="18px" />
              </ContentLoader>
            ) : (
              <StudioListItemRooms stationIds={props.stationIds} />
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
                <StudioListItemStations
                  isLoading={isMetroListLoading}
                  list={metroList}
                  stationIds={props.stationIds}
                />
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
                <StudioListItemPriceType priceType={props.priceType} />
              )}
            </Grid>
          </CardBottomGrid>
        </Grid>
      </Grid>
    </Card>
  );
};

export const StudioListItem = memo(_StudioListItem);
