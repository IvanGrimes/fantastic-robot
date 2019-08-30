import React, { memo } from 'react';
import dequal from 'dequal';
import { StudioMapPreviewListItemProps } from './index';
import { Wrapper } from './StudioMapPreviewListItem.styles';
import { StudioListItem } from '../../../StudioList/StudioListItem';

const _StudioMapPreviewListItem = ({
  isActive,
  handleClose,
  item,
}: StudioMapPreviewListItemProps) => {
  return (
    <Wrapper isVisible={isActive}>
      <button type="button" onClick={handleClose}>
        close
      </button>
      <StudioListItem
        loading={false}
        handleToggleFavorite={() => {}}
        variant="wide"
        {...item}
      />
    </Wrapper>
  );
};

export const StudioMapPreviewListItem = memo(_StudioMapPreviewListItem, dequal);
