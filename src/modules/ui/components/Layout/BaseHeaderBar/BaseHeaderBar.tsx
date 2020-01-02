import React, { ReactNode } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

export type BaseHeaderBarProps = {
  className?: string;
  show?: boolean;
  children: ReactNode | ReactNode[];
};

export const BaseHeaderBar = ({
  className = '',
  show = true,
  children,
}: BaseHeaderBarProps) => {
  if (!show) {
    return null;
  }

  return (
    <AppBar
      color="default"
      className={className}
      position="static"
      elevation={1}
    >
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
};
