import React, { Fragment, memo, useEffect, useState } from 'react';
import dequal from 'dequal';
import { useRequestIdleCallback } from '@hooks/useRequestIdleCallback';
import { PreviewListItem } from './PreviewListItem';
import { StudioItem } from '../../../list';

type Props = {
  list: StudioItem[];
  previewId: string | null;
};

const _StudioMapPreviewList = ({ list, previewId }: Props) => {
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
          />
        );
      })}
    </Fragment>
  ) : null;
};

export const PreviewList = memo(_StudioMapPreviewList, dequal);
