import React, { memo, ReactNode } from 'react';
import { LayoutProps } from './index';
import { Wrapper, Content } from './Layout.styles';
import { BottomNavigation } from '../BottomNavigation';
import { Header, HeaderProps } from '../Header';

export type LayoutProps = {
  children: ReactNode | ReactNode[];
} & Partial<HeaderProps>;

const _Layout = ({ children, withBar = false }: LayoutProps) => (
  <Wrapper id="#layout">
    <Header withBar={withBar} />
    <Content>{children}</Content>
    <BottomNavigation />
  </Wrapper>
);

export const Layout = memo(_Layout);
