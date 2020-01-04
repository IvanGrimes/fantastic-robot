import React from 'react';
import { DynamicRendering, GoogleMap } from '@modules/ui';
import { Block } from '../Block';
import { Wrapper } from './Location.styles';

export type LocationProps = {
  isLoading: boolean;
  lat: number;
  lng: number;
};

export const Location = ({ isLoading, ...props }: LocationProps) => {
  if (isLoading) {
    return <span>loading</span>;
  }

  return (
    <Block title="Расположение">
      <Wrapper>
        <DynamicRendering>
          <GoogleMap defaultCenter={props} />
        </DynamicRendering>
      </Wrapper>
    </Block>
  );
};
