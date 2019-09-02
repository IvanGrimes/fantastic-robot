import React, { memo } from 'react';
import dequal from 'dequal';
import { PersonPin } from '@material-ui/icons';
import { IconButton } from './StudioMapPinListItem.styles';
import { StudioMapPinListItemCommonProps } from './index';

type Props = StudioMapPinListItemCommonProps & {
  handleTogglePreview: () => void;
  isActive: boolean;
};

const _StudioMapPinListItem = ({
  lat,
  lng,
  handleTogglePreview,
  isActive,
}: Props) => {
  return (
    // @ts-ignore
    <IconButton
      lat={lat}
      lng={lng}
      onClick={handleTogglePreview}
      isActive={isActive}
    >
      <PersonPin />
    </IconButton>
  );
};

export const StudioMapPinListItem = memo(_StudioMapPinListItem, dequal);
