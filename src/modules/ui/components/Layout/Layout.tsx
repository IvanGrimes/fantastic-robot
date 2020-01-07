import React, { ReactNode } from 'react';
import { makeInjectable } from '@utils/makeInjectable';
import { Auth } from '@modules/auth';
import { LayoutProps } from './index';
import { Wrapper, Content } from './Layout.styles';
import { HeaderProps, Header as HeaderComponent } from './Header';
import { HeaderBar } from './BaseHeader/HeaderBar';
import { BottomNavigation as BottomNavigationComponent } from './BottomNavigation';

export type LayoutProps = {
  children: ReactNode | ReactNode[];
} & Partial<HeaderProps>;

const _Layout = ({ children, withBar = false }: LayoutProps) => {
  const { Header, BottomNavigation } = useInjections();

  return (
    <Wrapper id="#layout">
      <Header withBar={withBar} />
      <Content withBar={withBar}>{children}</Content>
      <BottomNavigation />
      <Auth />
    </Wrapper>
  );
};

export const { Component: Layout, useInjections } = makeInjectable({
  Header: HeaderComponent,
  HeaderBar,
  BottomNavigation: BottomNavigationComponent,
})(_Layout);
