import React, { memo } from 'react';
import dequal from 'dequal';
import * as list from '../../../../list';
import { PreviewListItemProps } from './index';
import { Wrapper } from './PreviewListItem.styles';

const { ListItem } = list

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
