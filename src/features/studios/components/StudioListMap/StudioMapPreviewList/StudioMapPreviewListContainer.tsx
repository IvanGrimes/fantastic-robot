import React, { memo, useCallback } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { StudioMapPreviewList } from './StudioMapPreviewList';
import { getStudioMapPreview, getStudios } from '../../../model/selectors';
import { RootState } from '../../../../../model/types';
import { setStudioMapPreview } from '../../../model/actions';

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  studios: getStudios(state).list,
  previewId: getStudioMapPreview(state),
});

const dispatchProps = {
  handleSetStudioMapPreview: setStudioMapPreview,
};

const _StudioMapPreviewListContainer = ({
  studios,
  previewId,
  handleSetStudioMapPreview,
}: Props) => {
  const handleToggleStudioMapPreview = useCallback(
    (id: string) => () => handleSetStudioMapPreview(id),
    [handleSetStudioMapPreview]
  );

  return (
    <StudioMapPreviewList
      list={studios}
      previewId={previewId}
      handleToggleStudioMapPreview={handleToggleStudioMapPreview}
    />
  );
};

export const StudioMapPreviewListContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_StudioMapPreviewListContainer, dequal));
