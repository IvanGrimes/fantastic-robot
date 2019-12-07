import React, { memo, useCallback, useEffect } from 'react';
import debounce from 'lodash/debounce';
import { connect } from 'react-redux';
import throttle from 'lodash/throttle';
import { useTheme } from '@material-ui/styles';
import { RootState } from '../../../../../../model/types';
import { getIsEnabled } from '../../../../../studioListMap/model/selectors';
import {
  setFullscreen,
  setIsEnable,
} from '../../../../../studioListMap/model/actions';
import { useRequestAnimationFrame } from '../../../../../../hooks/useRequestAnimationFrame';
import { ListMapSwitch } from './ListMapSwitch';
import { Theme } from '../../../../../../theme/types';
import { getBreakpoints } from '../../../../../../theme';

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  isVisible: getIsEnabled(state),
});

const dispatchProps = {
  handleSetVisibility: setIsEnable,
  handleSetFullscreen: setFullscreen,
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
