import React, { Fragment, memo } from 'react';
import dequal from 'dequal';
import { ShortStudio } from '../../../model/types';
import { StudioMapPreviewListItem } from './StudioMapPreviewListItem';

type Props = {
  list: ShortStudio[];
  previewId: string | null;
  handleToggleStudioMapPreview: (id: string) => () => void;
};

const _StudioMapPreviewList = ({
  list,
  previewId,
  handleToggleStudioMapPreview,
}: Props) => {
  return (
    <Fragment>
      {list.map(({ id, ...item }) => {
        const isActive = previewId === id;

        return (
          <StudioMapPreviewListItem
            key={id}
            item={{ id, ...item }}
            isActive={isActive}
            handleClose={
              isActive ? handleToggleStudioMapPreview(id) : undefined
            }
          />
        );
      })}
    </Fragment>
  );
};

export const StudioMapPreviewList = memo(_StudioMapPreviewList, dequal);
