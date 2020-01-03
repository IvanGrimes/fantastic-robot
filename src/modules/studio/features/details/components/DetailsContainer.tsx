import React, { memo } from 'react';
import { RootState } from '@model/types';
import * as data from '@modules/studio/features/data';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { DetailsOwnProps, Details } from './Details';

export type DetailsProps = DetailsOwnProps & ReturnType<typeof mapState>;

const mapState = (state: RootState) => ({
  isMetroListLoading: data.selectors.getMetroListLoading(state),
  isConfigLoading: data.selectors.getConfigLoading(state),
  metroList: data.selectors.getMetroList(state),
  config: data.selectors.getConfig(state),
});

const _DetailsContainer = (props: DetailsProps) => <Details {...props} />;

export const DetailsContainer = connect(mapState)(
  memo(_DetailsContainer, dequal)
);
