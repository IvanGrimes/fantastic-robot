import React, { memo, useCallback } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { StudioMapPinListItem } from './StudioMapPinListItem';
import { StudioMapPinListItemCommonProps } from './index';
import { setStudioMapPreview } from '../../../model/actions';
import { RootState } from '../../../../../model/types';
import { getStudioMapPreview } from '../../../model/selectors';
import { setFullscreenMap } from '../../../../ui/model/actions';

type Props = StudioMapPinListItemCommonProps &
  ReturnType<typeof mapStateToProps> &
  typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  previewId: getStudioMapPreview(state),
});

const dispatchProps = {
  handleSetStudioMapPreview: setStudioMapPreview,
  handleSetFullscreenMap: setFullscreenMap,
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
