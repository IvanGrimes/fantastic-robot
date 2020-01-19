import React, { memo, useCallback, useEffect } from 'react';
import debounce from 'lodash/debounce';
import { connect } from 'react-redux';
import throttle from 'lodash/throttle';
import { useTheme } from '@material-ui/styles';
import { RootState } from '@model/types';
import { listMap } from '@modules/studio';
import { useRequestAnimationFrame } from '@hooks/useRequestAnimationFrame';
import { Theme } from '@theme/types';
import { getBreakpoints } from '@theme/index';
import { ListMapSwitch } from './ListMapSwitch';

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  isVisible: listMap.selectors.getIsEnabled(state),
});

const dispatchProps = {
  handleSetVisibility: listMap.actions.setIsEnable,
  handleSetFullscreen: listMap.actions.setFullscreen,
};

const _ListMapSwitchContainer = ({
  isVisible,
  handleSetVisibility,
  handleSetFullscreen,
}: Props) => {
  const theme = useTheme<Theme>();
  const breakpoints = getBreakpoints({ theme });
  const handleToggleMapVisibility = useCallback(
    debounce(() => {
      handleSetVisibility(!isVisible);
      handleSetFullscreen(false);
    }, 250),
    [handleSetVisibility, isVisible]
  );
  const toggleMapVisibility = useRequestAnimationFrame(
    handleToggleMapVisibility
  );
  const handleResize = useCallback(
    throttle(() => {
      if (!isVisible && window.innerWidth < breakpoints.values.md) {
        handleToggleMapVisibility();
      }
    }, 100),
    [breakpoints.values.md, handleToggleMapVisibility, isVisible]
  );

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return <ListMapSwitch isActive={isVisible} onClick={toggleMapVisibility} />;
};

export const ListMapSwitchContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_ListMapSwitchContainer));
