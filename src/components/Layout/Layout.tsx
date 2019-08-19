import React, { memo } from 'react';
import { LayoutProps } from './index';
import { Wrapper, Content } from './Layout.styles';
import { Header } from '../../features/Header';

const _Layout = ({ children }: LayoutProps) => (
  <Wrapper>
    <Header />
    <Content>{children}</Content>
  </Wrapper>
);

export const Layout = memo(_Layout);
