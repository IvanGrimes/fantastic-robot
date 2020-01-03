import React, { ReactNode } from 'react';
import {
  Layout as DefaultLayout,
  LayoutProps,
} from '@modules/ui/components/Layout';
import { HeaderBar } from './HeaderBar';

type Props = LayoutProps & { backLink: ReactNode };

export const Layout = ({ backLink, ...props }: Props) => (
  <DefaultLayout
    injections={{
      HeaderBar: ({ show, className, children }) => (
        <HeaderBar className={className} show={show} backLink={backLink}>
          {children}
        </HeaderBar>
      ),
      BottomNavigation: () => null,
    }}
    withBar
    {...props}
  />
);
