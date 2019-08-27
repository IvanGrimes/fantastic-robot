import React, { memo } from 'react';
import dequal from 'dequal';
import { useHideOnScroll } from '../../hooks/useHideOnScroll';

type Props = {
  isBottomNavigationVisible: boolean;
  handleSetBottomNavigationVisibility: (visibility: boolean) => void;
};

const _BottomNavigation = ({
  isBottomNavigationVisible,
  handleSetBottomNavigationVisibility,
}: Props) => {
  useHideOnScroll({ handleSetVisibility: handleSetBottomNavigationVisibility });

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        bottom: isBottomNavigationVisible ? 0 : '-100px',
        width: '100%',
        height: '100px',
        backgroundColor: 'grey',
        zIndex: 6,
      }}
    />
  );
};

export const BottomNavigation = memo(_BottomNavigation, dequal);
