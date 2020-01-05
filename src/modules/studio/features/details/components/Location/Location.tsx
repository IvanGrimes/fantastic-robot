import React from 'react';
import { DynamicRendering, GoogleMap } from '@modules/ui';
import { Block } from '../Block';
import { Wrapper } from './Location.styles';
import { useDetails } from '../DetailsContext';

export type LocationProps = {
  isLoading: boolean;
  lat: number;
  lng: number;
};

export const Location = () => {
  const { isStudioLoading, studio } = useDetails();

  if (isStudioLoading) {
    return <span>loading</span>;
  }

  return (
    <Block title="Расположение">
      <Wrapper>
        <DynamicRendering>
          <GoogleMap defaultCenter={studio.location} />
        </DynamicRendering>
      </Wrapper>
    </Block>
  );
};
