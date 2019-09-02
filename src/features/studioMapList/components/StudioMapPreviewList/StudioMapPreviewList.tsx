import React, { Fragment, memo, useEffect, useState } from 'react';
import dequal from 'dequal';
import { StudioMapPreviewListItem } from './StudioMapPreviewListItem';
import { useRequestIdleCallback } from '../../../../hooks/useRequestIdleCallback';
import { StudioListItemProps } from '../../../studioList/components/StudioListItem';
import { ShortStudio } from '../../../studioList/model/types';

type Props = Pick<StudioListItemProps, 'handleToggleFavorite'> & {
  list: ShortStudio[];
  previewId: string | null;
};

const _StudioMapPreviewList = ({
  list,
  previewId,
  handleToggleFavorite,
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
          <StudioMapPreviewListItem
            key={id}
            item={{ id, ...item }}
            isActive={isActive}
            handleToggleFavorite={handleToggleFavorite}
          />
        );
      })}
    </Fragment>
  ) : null;
};

export const StudioMapPreviewList = memo(_StudioMapPreviewList, dequal);
