import React, { ReactNode } from 'react';
import { HiddenProps } from '@material-ui/core/Hidden';
import { Hidden as StyledHidden } from './Hidden.styles';

type Props = Exclude<HiddenProps, 'implementation'> & {
  children: ReactNode;
  query?: string;
};

export const Hidden = ({ query = '', children, ...props }: Props) => (
  <StyledHidden implementation="css" query={query} {...props}>
    {children}
  </StyledHidden>
);
