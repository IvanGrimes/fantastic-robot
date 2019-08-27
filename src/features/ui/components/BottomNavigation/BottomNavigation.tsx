import React, { memo } from 'react';
import dequal from 'dequal';
import { useHideOnScroll } from '../../hooks/useHideOnScroll';
import { Wrapper } from './BottomNavigation.styles';

type Props = {
  isBottomNavigationVisible: boolean;
  handleSetBottomNavigationVisibility: (visibility: boolean) => void;
};

const _BottomNavigation = ({
  isBottomNavigationVisible,
  handleSetBottomNavigationVisibility,
}: Props) => {
  useHideOnScroll({ handleSetVisibility: handleSetBottomNavigationVisibility });

  return <Wrapper isVisible={isBottomNavigationVisible} />;
};

export const BottomNavigation = memo(_BottomNavigation, dequal);
