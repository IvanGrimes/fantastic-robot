import React from 'react';
import * as ui from '@modules/ui';
import { Block } from '../Block';
import { Wrapper } from './Location.styles';
import { useDetails } from '../DetailsContext';

const { DynamicRendering, GoogleMap } = ui

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
