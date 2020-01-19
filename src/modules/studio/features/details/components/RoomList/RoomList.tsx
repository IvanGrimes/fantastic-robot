import React from 'react';
import { Grid } from '@material-ui/core';
import * as ui from '@modules/ui';
import * as services from '@modules/services';
import { RoomListCarousel } from './RoomList.styles';
import { Block } from '../Block';
import { useDetails } from '../DetailsContext';
import { RoomListItem } from './RoomListItem';

const { DynamicRendering, Hidden } = ui

export const RoomList = () => {
  const { variant, isRoomsLoading, rooms } = useDetails();
  const { isBot } = services.useWithSEO();
  const smallTabletDown = '(max-width: 767px)';
  const smallTabletUp = '(min-width: 768px)';

  if (variant !== 'studio') {
    return null;
  }

  return (
    <Block title="Залы" isLoading={isRoomsLoading || !rooms.length}>
      <Grid container item>
        <DynamicRendering force={isBot}>
          <Hidden query={smallTabletDown}>
            <RoomListCarousel slidesToShow={2} infinite={false}>
              {rooms.map(
                ({
                  color,
                  photoIds,
                  id,
                  studioId,
                  name,
                  interiorIds,
                  averagePrice,
                }) => (
                  <RoomListItem
                    key={id}
                    color={color}
                    photoIds={photoIds}
                    id={id}
                    studioId={studioId}
                    name={name}
                    interiorIds={interiorIds}
                    averagePrice={averagePrice}
                  />
                )
              )}
            </RoomListCarousel>
          </Hidden>
        </DynamicRendering>
        <DynamicRendering force={isBot}>
          <Hidden query={smallTabletUp}>
            <RoomListCarousel slidesToShow={1} infinite={false}>
              {[...rooms, ...rooms].map(
                ({
                  color,
                  photoIds,
                  id,
                  studioId,
                  name,
                  interiorIds,
                  averagePrice,
                }) => (
                  <RoomListItem
                    color={color}
                    photoIds={photoIds}
                    id={id}
                    studioId={studioId}
                    name={name}
                    interiorIds={interiorIds}
                    averagePrice={averagePrice}
                  />
                )
              )}
            </RoomListCarousel>
          </Hidden>
        </DynamicRendering>
      </Grid>
    </Block>
  );
};
