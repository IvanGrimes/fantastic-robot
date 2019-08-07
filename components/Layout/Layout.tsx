import React, { memo } from 'react';
import { LayoutProps } from './index';
import { Wrapper } from './Layout.styles';

const _Layout = ({ children }: LayoutProps) => <Wrapper>{children}</Wrapper>;

export const Layout = memo(_Layout);
