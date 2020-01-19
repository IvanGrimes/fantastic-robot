import React, { memo } from 'react';
import dequal from 'dequal';
import { ListItem } from '@modules/studio/features/list';
import { PreviewListItemProps } from './index';
import { Wrapper } from './PreviewListItem.styles';

const _PreviewListItem = ({
  isActive,
  item,
  config,
  isConfigLoading,
  metroList,
  isMetroListLoading,
}: PreviewListItemProps) => (
  <Wrapper isVisible={isActive}>
    <ListItem
      variant="wide"
      config={config}
      metroList={metroList}
      isMetroListLoading={isMetroListLoading}
      isConfigLoading={isConfigLoading}
      loading={false}
      {...item}
    />
  </Wrapper>
);

export const PreviewListItem = memo(_PreviewListItem, dequal);
