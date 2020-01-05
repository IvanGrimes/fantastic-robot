import React from 'react';
import { DynamicRendering, GoogleMap } from '@modules/ui';
import { Block } from '../Block';
import { Wrapper } from './Location.styles';
import { useDetails } from '../DetailsContext';

export const Location = () => {
  const { isStudioLoading, studio } = useDetails();

  return (
    <Block
      title="Расположение"
      isLoading={isStudioLoading || !studio.location.lng}
    >
      <Wrapper>
        <DynamicRendering>
          <GoogleMap defaultCenter={studio.location} />
        </DynamicRendering>
      </Wrapper>
    </Block>
  );
};
