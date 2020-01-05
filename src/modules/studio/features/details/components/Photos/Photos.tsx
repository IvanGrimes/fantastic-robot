import React, { memo, useMemo } from 'react';
import { floatToFraction } from '@utils/floatToFraction';
import { Wrapper, Carousel, LazyImage } from './Photos.styles';
import { PhotosSkeleton } from './PhotosSkeleton';
import { useDetails } from '../DetailsContext';

const _Photos = () => {
  const {
    variant,
    isStudioLoading,
    studio,
    isRoomLoading,
    room,
  } = useDetails();
  const { isLoading, photoIds } = useMemo(() => {
    switch (variant) {
      case 'studio':
        return { isLoading: isStudioLoading, photoIds: studio.photoIds };
      case 'room':
        return { isLoading: isRoomLoading, photoIds: room.photoIds };
      default:
        throw new Error();
    }
  }, [isRoomLoading, isStudioLoading, room.photoIds, studio.photoIds, variant]);
  const skeleton = useMemo(() => <PhotosSkeleton />, []);

  return (
    <Wrapper container item>
      <Carousel skeleton={skeleton}>
        {isLoading ? skeleton : null}
        {photoIds.length
          ? photoIds.map(id => (
              <LazyImage
                key={id}
                src="https://via.placeholder.com/1920x1080"
                ratio={floatToFraction(16.9)}
              />
            ))
          : skeleton}
      </Carousel>
    </Wrapper>
  );
};

export const Photos = memo(_Photos);
