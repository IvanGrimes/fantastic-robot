import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import * as studio from '@modules/studio';
import { FullscreenMapButton } from './FullscreenMapButton';

type Props = typeof dispatchProps;

const { listMap } = studio

const dispatchProps = {
  handleSetFullscreenMap: listMap.actions.setFullscreen,
};

const _FullscreenMapButtonContainer = ({ handleSetFullscreenMap }: Props) => {
  const handleFullscreenTurnOn = useCallback(
    () => handleSetFullscreenMap(true),
    [handleSetFullscreenMap]
  );

  return <FullscreenMapButton onClick={handleFullscreenTurnOn} />;
};

export const FullscreenMapButtonContainer = connect(
  null,
  dispatchProps
)(_FullscreenMapButtonContainer);
