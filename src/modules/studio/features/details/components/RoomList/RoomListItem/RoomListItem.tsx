import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Carousel, LazyImage, Link } from '@modules/ui';
import { floatToFraction } from '@utils/floatToFraction';
import { TextList } from '@modules/studio/components/TextList';
import { routes } from '@utils/routes';
import { Wrapper, ContentGrid } from './RoomListItem.styles';
import { useDetails } from '../../DetailsContext';

export type RoomListItemProps = {
  color: string;
  photoIds: string[];
  id: string;
  studioId: string;
  name: string;
  interiorIds: string[];
  averagePrice: number;
};

export const RoomListItem = ({
  averagePrice,
  color,
  id,
  interiorIds,
  name,
  photoIds,
  studioId,
}: RoomListItemProps) => {
  const { isConfigLoading, config } = useDetails();

  return (
    <Wrapper>
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
      <Link to={routes.room(studioId, id)}>
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
      </Link>
    </Wrapper>
  );
};
