import React from 'react';
import { connect } from 'react-redux';
import { StudioListItem } from './StudioListItem';
import { StudioListItemProps } from './index';
import { RootState } from '../../../../model/types';
import {
  getConfig,
  getConfigLoading,
  getMetroList,
  getMetroListLoading,
} from '../../../studioData/model/selectors';

type Props = StudioListItemProps & StudioListItemStateProps;

export type StudioListItemStateProps = ReturnType<typeof mapStateToProps>;

const mapStateToProps = (state: RootState) => ({
  metroList: getMetroList(state),
  isMetroListLoading: getMetroListLoading(state),
  config: getConfig(state),
  isConfigLoading: getConfigLoading(state),
});

const _StudioListItemContainer = (props: Props) => (
  <StudioListItem {...props} />
);

export const StudioListItemContainer = connect(mapStateToProps)(
  _StudioListItemContainer
);
