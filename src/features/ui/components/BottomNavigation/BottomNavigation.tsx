import React, { memo } from 'react';
import dequal from 'dequal';
import {
  ViewList as ViewListIcon,
  FavoriteBorder as FavoriteBorderIcon,
  AccountCircle as AccountCircleIcon,
} from '@material-ui/icons';
import { useRouter } from 'next/router';
import { useHideOnScroll } from '../../hooks/useHideOnScroll';
import {
  BottomNavigation as StyledBottomNavigation,
  BottomNavigationAction,
} from './BottomNavigation.styles';

const navigationList = [
  {
    label: 'Каталог',
    value: '/',
    routes: ['/page/[number]', '/'],
    icon: <ViewListIcon />,
  },
  {
    label: 'Избранное',
    value: '/user/favorite',
    routes: ['/user/favorite'],
    icon: <FavoriteBorderIcon />,
  },
  {
    label: 'Войти',
    value: '/sign-in',
    routes: ['/sign-in'],
    icon: <AccountCircleIcon />,
  },
];

type Props = {
  isBottomNavigationVisible: boolean;
  handleSetBottomNavigationVisibility: (visibility: boolean) => void;
};

const _BottomNavigation = ({
  isBottomNavigationVisible,
  handleSetBottomNavigationVisibility,
}: Props) => {
  useHideOnScroll({
    isVisible: isBottomNavigationVisible,
    handleSetVisibility: handleSetBottomNavigationVisibility,
  });
  const { route } = useRouter();

  return (
    <StyledBottomNavigation isVisible={isBottomNavigationVisible} showLabels>
      {navigationList.map(({ routes, ...item }) => (
        <BottomNavigationAction
          key={item.label}
          isActive={routes.includes(route)}
          {...item}
        />
      ))}
    </StyledBottomNavigation>
  );
};

export const BottomNavigation = memo(_BottomNavigation, dequal);
