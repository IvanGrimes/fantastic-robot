import React, { useMemo } from 'react';
import {
  Layout as DefaultLayout,
  LayoutProps,
} from '@modules/ui/components/Layout';
import { HeaderBar } from './HeaderBar';

export const Layout = (props: LayoutProps) => {
  const InjectedLayout = useMemo(
    () => DefaultLayout.inject({ HeaderBar, BottomNavigation: () => null }),
    []
  );

  return <InjectedLayout withBar {...props} />;
};
