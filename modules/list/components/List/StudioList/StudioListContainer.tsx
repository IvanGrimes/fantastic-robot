import React, { FunctionComponent, useEffect } from 'react';
import { StudioListServiceProps } from '../../../internal';
import { StudioList } from './StudioList';

export const StudioListContainer: FunctionComponent<{
  service: StudioListServiceProps;
}> = ({ service }) => {
  useEffect(() => {
    if (service.isInit(service)) {
      service.effect([]);
    }
  }, [service]);

  return <StudioList service={service} />;
};
