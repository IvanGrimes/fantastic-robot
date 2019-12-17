import React, { memo, useState } from 'react';
import dequal from 'dequal';
import { Grid } from '@material-ui/core';
import { LazyImage } from '@components/LazyImage';
import { floatToFraction } from '@utils/floatToFraction';
import { PhotosSkeleton } from './PhotosSkeleton';
import { StudioListItemProps } from '../index';
import { Carousel } from './PhotosSkeleton.styles';

export type StudioListItemPhotosProps = { loading: boolean } & Pick<
  StudioListItemProps,
  'photoIds'
>;

const _StudioListItemPhotos = ({
  loading,
  photoIds,
}: StudioListItemPhotosProps) => {
  const [isCarouselLoaded, setCarouselLoaded] = useState(false);

  return loading ? (
    <PhotosSkeleton />
  ) : (
    <>
      <Grid container>
        <Grid item xs={12}>
          {!isCarouselLoaded && <PhotosSkeleton />}
          {photoIds && (
            <Carousel
              isLoaded={isCarouselLoaded}
              onInit={() => setCarouselLoaded(true)}
            >
              {photoIds.map(id => (
                <LazyImage
                  key={id}
                  src="https://via.placeholder.com/1920x1080"
                  ratio={floatToFraction(16.9)}
                />
              ))}
            </Carousel>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export const Photos = memo(_StudioListItemPhotos, dequal);
