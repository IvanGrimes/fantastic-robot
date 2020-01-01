import React, { ReactNode } from 'react';
import { LayoutProps } from './index';
import { Wrapper, Content } from './Layout.styles';
import { HeaderProps } from './Header';
import { useInjections, withInjector } from './layoutInjector';

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
    </Wrapper>
  );
};

export const Layout = withInjector(_Layout);
