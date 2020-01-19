import React from 'react';
import * as ui from '@modules/ui';
import { Container } from './Layout.styles';

const { Layout: DefaultLayout } = ui;

export type LayoutProps = Pick<ui.LayoutProps, 'children'>;

const layoutInjections = { HeaderBar: () => null };

export const Layout = ({ children }: LayoutProps) => (
  <DefaultLayout injections={layoutInjections} withBar={false}>
    <Container>{children}</Container>
  </DefaultLayout>
);
