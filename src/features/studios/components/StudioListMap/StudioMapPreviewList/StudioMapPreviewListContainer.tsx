import React, { memo, useEffect } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { StudioMapPreviewList } from './StudioMapPreviewList';
import { getStudioMapPreview, getStudios } from '../../../model/selectors';
import { RootState } from '../../../../../model/types';
import {
  setStudioMapPreview,
  toggleFavoriteAsync,
} from '../../../model/actions';
import { getIsFullscreenMap } from '../../../../ui/model/selectors';

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  studios: getStudios(state).list,
  previewId: getStudioMapPreview(state),
  isFullscreenMap: getIsFullscreenMap(state),
});

const dispatchProps = {
  handleSetStudioMapPreview: setStudioMapPreview,
  handleToggleFavorite: toggleFavoriteAsync.request,
};

const _StudioMapPreviewListContainer = ({
  studios,
  previewId,
  handleSetStudioMapPreview,
  isFullscreenMap,
  handleToggleFavorite,
}: Props) => {
  useEffect(() => {
    if (!isFullscreenMap && previewId) {
      handleSetStudioMapPreview(previewId);
    }
  }, [handleSetStudioMapPreview, isFullscreenMap, previewId]);

  return (
    <StudioMapPreviewList
      list={studios}
      previewId={previewId}
      handleToggleFavorite={handleToggleFavorite}
    />
  );
};

export const StudioMapPreviewListContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_StudioMapPreviewListContainer, dequal));
