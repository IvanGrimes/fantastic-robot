import React, { memo } from 'react';
import { RootState } from '@model/types';
import * as data from '@modules/studio/features/data';
import { useSelector } from 'react-redux';
import dequal from 'dequal';
import { DetailsOwnProps, Details } from './Details';

export type DetailsProps = DetailsOwnProps;

const mapState = (state: RootState) => ({
  isMetroListLoading: data.selectors.getMetroListLoading(state),
  isConfigLoading: data.selectors.getConfigLoading(state),
  metroList: data.selectors.getMetroList(state),
  config: data.selectors.getConfig(state),
});

const _DetailsContainer = (props: DetailsProps) => {
  const state = useSelector(mapState);

  return <Details {...props} {...state} />;
};

export const DetailsContainer = memo(_DetailsContainer, dequal);
