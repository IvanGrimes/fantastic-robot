import React, { memo } from 'react';
import { LayoutProps } from './index';
import { Wrapper, Content } from './Layout.styles';
import { Header } from '../Header';
import { BottomNavigation } from '../BottomNavigation';

const _Layout = ({ children }: LayoutProps) => (
  <Wrapper id="#layout">
    <Header />
    <Content>{children}</Content>
    <BottomNavigation />
  </Wrapper>
);

export const Layout = memo(_Layout);
