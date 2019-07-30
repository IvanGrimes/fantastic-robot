import React, { memo } from 'react';
import { LayoutProps } from "./index";

const _Layout = ({ children }: LayoutProps) => (
  <div>{children}</div>
);

export const Layout = memo(_Layout);
