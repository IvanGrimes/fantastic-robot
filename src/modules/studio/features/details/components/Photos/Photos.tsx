import React, { memo } from 'react';
import { floatToFraction } from '@utils/floatToFraction';
import { Grid } from '@material-ui/core';
import { Wrapper, Carousel, LazyImage } from './Photos.styles';
import { PhotosSkeleton } from './PhotosSkeleton';

export type Props = {
  isLoading: boolean;
  photoIds: string[];
};

const _Photos = ({ isLoading, photoIds }: Props) => (
  <Grid container item xs={12}>
    <Wrapper>
      {isLoading ? (
        <PhotosSkeleton />
      ) : (
        <Carousel>
          {photoIds.map(id => (
            <LazyImage
              key={id}
              src="https://via.placeholder.com/1920x1080"
              ratio={floatToFraction(16.9)}
            />
          ))}
        </Carousel>
      )}
    </Wrapper>
  </Grid>
);

export const Photos = memo(_Photos);
