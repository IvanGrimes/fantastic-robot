import React, { memo, useEffect } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { RootState } from '@model/types';
import { PreviewList } from './PreviewList';
import { getIsFullscreen, getPreviewStudio } from '../../model/selectors';
import { getStudios } from '../../../list/model/selectors';
import { setPreviewStudio } from '../../model/actions';
import * as data from '../../../data';

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  studios: getStudios(state),
  previewId: getPreviewStudio(state),
  isMapListFullscreen: getIsFullscreen(state),
  metroList: data.selectors.getMetroList(state),
  isMetroListLoading: data.selectors.getMetroListLoading(state),
  config: data.selectors.getConfig(state),
  isConfigLoading: data.selectors.getConfigLoading(state),
});

const dispatchProps = {
  handleSetStudioMapPreview: setPreviewStudio,
};

const _PreviewListContainer = ({
  studios,
  previewId,
  handleSetStudioMapPreview,
  isMapListFullscreen,
  metroList,
  isMetroListLoading,
  isConfigLoading,
  config,
}: Props) => {
  useEffect(() => {
    if (!isMapListFullscreen && previewId) {
      handleSetStudioMapPreview(previewId);
    }
  }, [handleSetStudioMapPreview, isMapListFullscreen, previewId]);

  return (
    <PreviewList
      list={studios}
      previewId={previewId}
      config={config}
      isConfigLoading={isConfigLoading}
      isMetroListLoading={isMetroListLoading}
      metroList={metroList}
    />
  );
};

export const PreviewListContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_PreviewListContainer, dequal));
