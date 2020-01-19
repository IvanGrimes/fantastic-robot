import React from 'react';
import {
  Layout as DefaultLayout,
  LayoutProps as DefaultLayoutProps,
} from '@modules/ui';
import { Container } from './Layout.styles';

export type LayoutProps = Pick<DefaultLayoutProps, 'children'>;

const layoutInjections = { HeaderBar: () => null };

export const Layout = ({ children }: LayoutProps) => (
  <DefaultLayout injections={layoutInjections} withBar={false}>
    <Container>{children}</Container>
  </DefaultLayout>
);
