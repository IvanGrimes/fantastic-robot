import React, { memo, useCallback } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { PinListItem } from './PinListItem';
import { PinListItemCommonProps } from './index';
import { RootState } from '../../../../../model/types';
import { getPreviewStudio } from '../../../model/selectors';
import { setFullscreen, setPreviewStudio } from '../../../model/actions';

type Props = PinListItemCommonProps &
  ReturnType<typeof mapStateToProps> &
  typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  previewId: getPreviewStudio(state),
});

const dispatchProps = {
  handleSetStudioMapPreview: setPreviewStudio,
  handleSetFullscreenMap: setFullscreen,
};

const _PinListItemContainer = ({
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
    <PinListItem
      id={id}
      lat={lat}
      lng={lng}
      handleTogglePreview={handleTogglePreview}
      isActive={id === previewId}
    />
  );
};

export const PinListItemContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_PinListItemContainer, dequal));
