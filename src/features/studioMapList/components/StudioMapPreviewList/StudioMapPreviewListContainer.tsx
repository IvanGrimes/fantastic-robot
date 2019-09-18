import React, { memo, useEffect } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { StudioMapPreviewList } from './StudioMapPreviewList';
import { getIsFullscreen, getPreviewStudio } from '../../model/selectors';
import { RootState } from '../../../../model/types';
import { getStudios } from '../../../studioList/model/selectors';
import { setPreviewStudio } from '../../model/actions';

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  studios: getStudios(state),
  previewId: getPreviewStudio(state),
  isMapListFullscreen: getIsFullscreen(state),
});

const dispatchProps = {
  handleSetStudioMapPreview: setPreviewStudio,
};

const _StudioMapPreviewListContainer = ({
  studios,
  previewId,
  handleSetStudioMapPreview,
  isMapListFullscreen,
}: Props) => {
  useEffect(() => {
    if (!isMapListFullscreen && previewId) {
      handleSetStudioMapPreview(previewId);
    }
  }, [handleSetStudioMapPreview, isMapListFullscreen, previewId]);

  return <StudioMapPreviewList list={studios} previewId={previewId} />;
};

export const StudioMapPreviewListContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_StudioMapPreviewListContainer, dequal));
