import React, { memo, useCallback } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { StudioMapPinListItem } from './StudioMapPinListItem';
import { StudioMapPinListItemCommonProps } from './index';
import { setStudioMapPreview } from '../../../model/actions';

type Props = StudioMapPinListItemCommonProps & typeof dispatchProps;

const dispatchProps = {
  handleSetStudioMapPreview: setStudioMapPreview,
};

const _StudioMapPinListItemContainer = ({
  id,
  handleSetStudioMapPreview,
  lat,
  lng,
}: Props) => {
  const handleTogglePreview = useCallback(() => handleSetStudioMapPreview(id), [
    handleSetStudioMapPreview,
    id,
  ]);

  return (
    <StudioMapPinListItem
      id={id}
      lat={lat}
      lng={lng}
      handleTogglePreview={handleTogglePreview}
    />
  );
};

export const StudioMapPinListItemContainer = connect(
  null,
  dispatchProps
)(memo(_StudioMapPinListItemContainer, dequal));
