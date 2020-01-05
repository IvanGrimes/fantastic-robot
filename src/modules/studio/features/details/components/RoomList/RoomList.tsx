import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Carousel, LazyImage, DynamicRendering } from '@modules/ui';
import { floatToFraction } from '@utils/floatToFraction';
import { TextList } from '@modules/studio/components/TextList';
import { useWithSEO } from '@modules/services';
import Link from 'next/link';
import { RoomListCarousel, RoomListItem, ContentGrid } from './RoomList.styles';
import { Block } from '../Block';
import { useDetails } from '../DetailsContext';

export const RoomList = () => {
  const {
    variant,
    isRoomsLoading,
    rooms,
    isConfigLoading,
    config,
  } = useDetails();
  const { isBot } = useWithSEO();

  if (variant !== 'studio') {
    return null;
  }

  return (
    <Block title="Залы" isLoading={isRoomsLoading || !rooms.length}>
      <DynamicRendering force={isBot}>
        <Grid container item>
          <RoomListCarousel slidesToShow={2} infinite={false}>
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
                <RoomListItem key={id}>
                  <Grid container item>
                    {photoIds && (
                      <Carousel swipe={false} dots={false}>
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
                  <Link
                    href="/[studio]/[room]"
                    as={`/${studioId}/${id}`}
                    passHref
                  >
                    <a
                      href="/"
                      css={`
                        text-decoration: none;
                      `}
                    >
                      <ContentGrid container item spacing={2} color={color}>
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
                    </a>
                  </Link>
                </RoomListItem>
              )
            )}
          </RoomListCarousel>
        </Grid>
      </DynamicRendering>
    </Block>
  );
};
