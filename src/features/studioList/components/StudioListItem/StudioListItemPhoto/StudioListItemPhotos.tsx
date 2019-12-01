import React, { memo } from 'react';
import dequal from 'dequal';
import { Grid } from '@material-ui/core';
import { Carousel } from '../../../../../components/Carousel';
import { LazyImage } from '../../../../../components/LazyImage';
import { floatToFraction } from '../../../../../utils/floatToFraction';
import { StudioListItemPhotosProps } from './index';
import { StudioListItemPhotosSkeleton } from './StudioListItemPhotosSkeleton';
import { StudioListItemProps } from '../index';

export type StudioListItemPhotosProps = { loading: boolean } & Pick<
  StudioListItemProps,
  'photoIds'
>;

const _StudioListItemPhotos = ({
  loading,
  photoIds,
}: StudioListItemPhotosProps) =>
  loading ? (
    <StudioListItemPhotosSkeleton />
  ) : (
    <Grid container>
      <Grid item xs={12}>
        {photoIds ? (
          <Carousel>
            {photoIds.map(id => (
              <LazyImage
                key={id}
                src="https://via.placeholder.com/1920x1080"
                ratio={floatToFraction(16.9)}
              />
            ))}
          </Carousel>
        ) : null}
      </Grid>
    </Grid>
  );

export const StudioListItemPhotos = memo(_StudioListItemPhotos, dequal);
