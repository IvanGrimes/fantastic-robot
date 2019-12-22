import React from 'react';
import { Link as MaterialLink } from '@material-ui/core';
import NextLink from 'next/link';
import { LinkProps } from './index';

export const Link = ({
  className = '',
  MaterialLinkProps = {},
  children,
  ...props
}: LinkProps) => (
  <NextLink {...props} passHref>
    <MaterialLink className={className} {...MaterialLinkProps}>
      {children}
    </MaterialLink>
  </NextLink>
);
