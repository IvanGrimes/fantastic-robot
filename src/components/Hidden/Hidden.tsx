import React, { ReactNode } from 'react';
import { Hidden as DefaultHidden } from '@material-ui/core';
import { HiddenProps } from '@material-ui/core/Hidden';

type Props = Exclude<HiddenProps, 'implementation'> & { children: ReactNode };

export const Hidden = ({ children, ...props }: Props) => (
  <DefaultHidden implementation="css" {...props}>
    {children}
  </DefaultHidden>
);
