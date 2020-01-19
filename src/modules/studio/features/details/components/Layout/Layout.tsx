import React, { ReactNode, Fragment } from 'react';
import * as ui from '@modules/ui';
import { HeaderBar } from './HeaderBar';

type Props = ui.LayoutProps & { backLink: ReactNode };

const { Layout: DefaultLayout } = ui;

export const Layout = ({ backLink, ...props }: Props) => (
  <DefaultLayout
    injections={{
      HeaderBar: ({ show, className, children }) => (
        <HeaderBar className={className} show={show} backLink={backLink}>
          {children}
        </HeaderBar>
      ),
      BottomNavigation: () => <Fragment />,
    }}
    withBar
    {...props}
  />
);
