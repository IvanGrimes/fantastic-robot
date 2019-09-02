import React, { memo } from 'react';
import dequal from 'dequal';
import { Grid } from '@material-ui/core';
import { Carousel } from '../../../../../components/Carousel';
import { LazyImage } from '../../../../../components/LazyImage';
import { floatToFraction } from '../../../../../utils/floatToFraction';
import { StudioListItemPhotosProps } from './index';

const _StudioListItemPhotos = ({ photos }: StudioListItemPhotosProps) => {
  if (!photos) {
    return null;
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Carousel>
          {photos.map(({ id, ratio }) => (
            <LazyImage
              key={id}
              src={`https://via.placeholder.com/${id}`}
              ratio={floatToFraction(ratio)}
            />
          ))}
        </Carousel>
      </Grid>
    </Grid>
  );
};

export const StudioListItemPhotos = memo(_StudioListItemPhotos, dequal);
