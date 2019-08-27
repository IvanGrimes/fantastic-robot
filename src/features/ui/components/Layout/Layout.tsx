import React, { memo } from 'react';
import dynamic from 'next/dynamic';
import { LayoutProps } from './index';
import { Wrapper, Content } from './Layout.styles';
import { BottomNavigation } from '../BottomNavigation';

const Header = dynamic<{}>(() =>
  import('../Header').then(module => module.Header)
);

const _Layout = ({ children }: LayoutProps) => (
  <Wrapper id="#layout">
    <Header />
    <Content>{children}</Content>
    <BottomNavigation />
  </Wrapper>
);

export const Layout = memo(_Layout);
