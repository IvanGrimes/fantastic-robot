import React, { memo } from 'react';
import dequal from 'dequal';
import { StudioMapPreviewListItemProps } from './index';
import { Wrapper } from './StudioMapPreviewListItem.styles';
import { StudioListItem } from '../../../../../studioList/components/StudioListItem';

const _StudioMapPreviewListItem = ({
  isActive,
  item,
  handleToggleFavorite,
}: StudioMapPreviewListItemProps) => {
  return (
    <Wrapper isVisible={isActive}>
      <StudioListItem
        loading={false}
        handleToggleFavorite={handleToggleFavorite}
        variant="wide"
        {...item}
      />
    </Wrapper>
  );
};

export const StudioMapPreviewListItem = memo(_StudioMapPreviewListItem, dequal);
