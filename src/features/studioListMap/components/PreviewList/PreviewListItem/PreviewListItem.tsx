import React, { memo } from 'react';
import dequal from 'dequal';
import { PreviewListItemProps } from './index';
import { Wrapper } from './PreviewListItem.styles';
import { StudioListItem } from '../../../../studioList/components/StudioListItem';

const _PreviewListItem = ({ isActive, item }: PreviewListItemProps) => {
  return (
    <Wrapper isVisible={isActive}>
      <StudioListItem loading={false} variant="wide" {...item} />
    </Wrapper>
  );
};

export const PreviewListItem = memo(_PreviewListItem, dequal);
