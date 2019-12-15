import React, { memo, useEffect } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { PreviewList } from './PreviewList';
import { getIsFullscreen, getPreviewStudio } from '../../model/selectors';
import { RootState } from '../../../../../../model/types';
import { getStudios } from '../../../list/model/selectors';
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

const _PreviewListContainer = ({
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

  return <PreviewList list={studios} previewId={previewId} />;
};

export const PreviewListContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_PreviewListContainer, dequal));
