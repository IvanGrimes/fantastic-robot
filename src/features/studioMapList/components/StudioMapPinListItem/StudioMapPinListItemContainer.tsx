import React, { memo, useCallback } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { StudioMapPinListItem } from './StudioMapPinListItem';
import { StudioMapPinListItemCommonProps } from './index';
import { RootState } from '../../../../model/types';
import { getPreviewStudio } from '../../model/selectors';
import { setFullscreen, setPreviewStudio } from '../../model/actions';

type Props = StudioMapPinListItemCommonProps &
  ReturnType<typeof mapStateToProps> &
  typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  previewId: getPreviewStudio(state),
});

const dispatchProps = {
  handleSetStudioMapPreview: setPreviewStudio,
  handleSetFullscreenMap: setFullscreen,
};

const _StudioMapPinListItemContainer = ({
  id,
  handleSetStudioMapPreview,
  handleSetFullscreenMap,
  lat,
  lng,
  previewId,
}: Props) => {
  const handleTogglePreview = useCallback(() => {
    handleSetStudioMapPreview(id);
    handleSetFullscreenMap(true);
  }, [handleSetStudioMapPreview, handleSetFullscreenMap, id]);

  return (
    <StudioMapPinListItem
      id={id}
      lat={lat}
      lng={lng}
      handleTogglePreview={handleTogglePreview}
      isActive={id === previewId}
    />
  );
};

export const StudioMapPinListItemContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_StudioMapPinListItemContainer, dequal));
