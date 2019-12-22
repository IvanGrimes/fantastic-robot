import React, { useMemo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Carousel, LazyImage, DynamicRendering } from '@modules/ui';
import { floatToFraction } from '@utils/floatToFraction';
import { TextList } from '@modules/studio/components/TextList';
import { getConfig } from '@modules/studio/features/data/model/selectors';
import { getRooms } from '../../model/selectors';
import {
  RoomListCarousel,
  RoomListItem,
  ContentGrid,
  Link,
} from './RoomList.styles';

export type RoomListProps = {
  isRoomsLoading: boolean;
  rooms: ReturnType<typeof getRooms>;
  isConfigLoading: boolean;
  config: ReturnType<typeof getConfig>;
};

export const RoomList = ({
  isRoomsLoading,
  rooms,
  isConfigLoading,
  config,
}: RoomListProps) => {
  const skeleton = useMemo(() => <span>Loading room list</span>, []);

  if (isRoomsLoading) {
    return skeleton;
  }

  return (
    <DynamicRendering>
      <Grid container>
        <RoomListCarousel skeleton={skeleton} slidesToShow={2} infinite={false}>
          {[...rooms, ...rooms].map(
            ({ photoIds, id, name, interiorIds, averagePrice }) => (
              <RoomListItem key={id}>
                <Grid container item>
                  {photoIds && (
                    <Carousel skeleton={skeleton} swipe={false} dots={false}>
                      {photoIds.map(photoId => (
                        <LazyImage
                          key={photoId}
                          src="https://via.placeholder.com/1920x1080"
                          ratio={floatToFraction(16.9)}
                        />
                      ))}
                    </Carousel>
                  )}
                </Grid>
                <Link href="/">
                  <ContentGrid container item spacing={2}>
                    <Grid container item justify="space-between">
                      <Grid item xs={8}>
                        <Typography variant="h6" component="h2">
                          {name}
                        </Typography>
                      </Grid>
                      <Grid container justify="flex-end" item xs={3}>
                        <Typography variant="subtitle1" component="span">
                          {averagePrice} &#8381;
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container item>
                      <TextList
                        loading={isConfigLoading}
                        ids={interiorIds || ['loft', 'flat']}
                        list={config.interior}
                        size="small"
                      />
                    </Grid>
                  </ContentGrid>
                </Link>
              </RoomListItem>
            )
          )}
        </RoomListCarousel>
      </Grid>
    </DynamicRendering>
  );
};
