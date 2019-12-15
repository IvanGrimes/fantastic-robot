import React, { memo } from 'react';
import { LayoutProps } from './index';
import { Wrapper, Content } from './Layout.styles';
import { BottomNavigation } from '../BottomNavigation';
import { Header } from '../Header';

const _Layout = ({ children }: LayoutProps) => (
  <Wrapper id="#layout">
    <Header />
    <Content>{children}</Content>
    <BottomNavigation />
  </Wrapper>
);

export const Layout = memo(_Layout);
