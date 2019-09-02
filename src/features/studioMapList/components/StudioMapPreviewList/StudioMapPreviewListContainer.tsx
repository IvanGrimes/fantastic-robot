import React, { memo, useEffect } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { StudioMapPreviewList } from './StudioMapPreviewList';
import { getIsFullscreen, getPreviewStudio } from '../../model/selectors';
import { RootState } from '../../../../model/types';
import { toggleFavoriteAsync } from '../../../studioList/model/actions';
import { getStudios } from '../../../studioList/model/selectors';
import { setPreviewStudio } from '../../model/actions';

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  studios: getStudios(state).list,
  previewId: getPreviewStudio(state),
  isMapListFullscreen: getIsFullscreen(state),
});

const dispatchProps = {
  handleSetStudioMapPreview: setPreviewStudio,
  handleToggleFavorite: toggleFavoriteAsync.request,
};

const _StudioMapPreviewListContainer = ({
  studios,
  previewId,
  handleSetStudioMapPreview,
  isMapListFullscreen,
  handleToggleFavorite,
}: Props) => {
  useEffect(() => {
    if (!isMapListFullscreen && previewId) {
      handleSetStudioMapPreview(previewId);
    }
  }, [handleSetStudioMapPreview, isMapListFullscreen, previewId]);

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
