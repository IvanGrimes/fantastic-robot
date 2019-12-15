import React, { memo } from 'react';
import { floatToFraction } from '@utils/floatToFraction';
import { Wrapper, Carousel, LazyImage } from './Photos.styles';
import { PhotosSkeleton } from './PhotosSkeleton';

type Props = {
  isLoading: boolean;
  photoIds: string[];
};

const _Photos = ({ isLoading, photoIds }: Props) => {
  if (isLoading) {
    return <PhotosSkeleton />;
  }

  return (
    <Wrapper>
      <Carousel>
        {photoIds.map(id => (
          <LazyImage
            key={id}
            src="https://via.placeholder.com/1920x1080"
            ratio={floatToFraction(16.9)}
          />
        ))}
      </Carousel>
    </Wrapper>
  );
};

export const Photos = memo(_Photos);
