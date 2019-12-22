import React, { Fragment, memo, useEffect, useState } from 'react';
import dequal from 'dequal';
import { useRequestIdleCallback } from '@hooks/useRequestIdleCallback';
import { PreviewListItem, PreviewListDataProps } from './PreviewListItem';
import { StudioItem } from '../../../list';

type Props = {
  list: StudioItem[];
  previewId: string | null;
} & PreviewListDataProps;

const _StudioMapPreviewList = ({
  list,
  previewId,
  isMetroListLoading,
  metroList,
  isConfigLoading,
  config,
}: Props) => {
  const [render, setRender] = useState(false);
  const handleRender = useRequestIdleCallback(() => setRender(true));

  useEffect(() => {
    handleRender();
  }, [handleRender]);

  return render ? (
    <Fragment>
      {list.map(({ id, ...item }) => {
        const isActive = previewId === id;

        return (
          <PreviewListItem
            key={id}
            item={{ id, ...item }}
            isActive={isActive}
            config={config}
            isConfigLoading={isConfigLoading}
            isMetroListLoading={isMetroListLoading}
            metroList={metroList}
          />
        );
      })}
    </Fragment>
  ) : null;
};

export const PreviewList = memo(_StudioMapPreviewList, dequal);
