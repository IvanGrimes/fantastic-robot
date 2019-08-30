import React, { memo } from 'react';
import dequal from 'dequal';
import { PersonPin } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { StudioMapPinListItemCommonProps } from './index';

type Props = StudioMapPinListItemCommonProps & {
  handleTogglePreview: () => void;
};

const _StudioMapPinListItem = ({ lat, lng, handleTogglePreview }: Props) => {
  // @ts-ignore
  return (
    <IconButton lat={lat} lng={lng} onClick={handleTogglePreview}>
      <PersonPin />
    </IconButton>
  );
};

export const StudioMapPinListItem = memo(_StudioMapPinListItem, dequal);
