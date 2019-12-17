import React, { memo, useMemo } from 'react';
import dequal from 'dequal';
import { Grid } from '@material-ui/core';
import { LazyImage } from '@components/LazyImage';
import { floatToFraction } from '@utils/floatToFraction';
import { Carousel } from '@components/Carousel';
import { PhotosSkeleton } from './PhotosSkeleton';
import { StudioListItemProps } from '../index';

export type StudioListItemPhotosProps = { loading: boolean } & Pick<
  StudioListItemProps,
  'photoIds'
>;

const _StudioListItemPhotos = ({
  loading,
  photoIds,
}: StudioListItemPhotosProps) => {
  const skeleton = useMemo(() => <PhotosSkeleton />, []);

  return loading ? (
    skeleton
  ) : (
    <>
      <Grid container>
        <Grid item xs={12}>
          {photoIds && (
            <Carousel skeleton={skeleton}>
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
