import React, { Fragment, memo, useEffect, useState } from 'react';
import dequal from 'dequal';
import { StudioMapPreviewListItem } from './StudioMapPreviewListItem';
import { useRequestIdleCallback } from '../../../../hooks/useRequestIdleCallback';
import { StudioItem } from '../../../studioList/model/types';

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
          <StudioMapPreviewListItem
            key={id}
            item={{ id, ...item }}
            isActive={isActive}
          />
        );
      })}
    </Fragment>
  ) : null;
};

export const StudioMapPreviewList = memo(_StudioMapPreviewList, dequal);
