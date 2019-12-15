import React, { memo } from 'react';
import dequal from 'dequal';
import { PersonPin } from '@material-ui/icons';
import { IconButton } from './PinListItem.styles';
import { PinListItemCommonProps } from './index';

type Props = PinListItemCommonProps & {
  handleTogglePreview: () => void;
  isActive: boolean;
};

const _PinListItem = ({ lat, lng, handleTogglePreview, isActive }: Props) => {
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

export const PinListItem = memo(_PinListItem, dequal);
