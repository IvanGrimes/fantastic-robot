import React, { ReactNode } from 'react';
import { HiddenProps } from '@material-ui/core/Hidden';
import { Hidden as StyledHidden } from './Hidden.styles';

type Props = Exclude<HiddenProps, 'implementation'> & {
  children: ReactNode;
  query?: string;
  fluid?: boolean;
};

export const Hidden = ({
  query = '',
  fluid = true,
  children,
  ...props
}: Props) => (
  <StyledHidden implementation="css" query={query} fluid={fluid} {...props}>
    {children}
  </StyledHidden>
);
