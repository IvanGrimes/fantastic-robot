import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '@model/types';
import { StudioListItem } from './StudioListItem';
import { StudioListItemProps } from './index';
import * as data from '../../../data';

type Props = StudioListItemProps & StudioListItemStateProps;

export type StudioListItemStateProps = ReturnType<typeof mapStateToProps>;

const mapStateToProps = (state: RootState) => ({
  metroList: data.selectors.getMetroList(state),
  isMetroListLoading: data.selectors.getMetroListLoading(state),
  config: data.selectors.getConfig(state),
  isConfigLoading: data.selectors.getConfigLoading(state),
});

const _StudioListItemContainer = (props: Props) => (
  <StudioListItem {...props} />
);

export const StudioListItemContainer = connect(mapStateToProps)(
  _StudioListItemContainer
);
