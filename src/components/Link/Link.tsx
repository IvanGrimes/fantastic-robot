import React from 'react';
import { Link as MaterialLink } from '@material-ui/core';
import NextLink from 'next/link';
import { LinkProps } from './index';

export const Link = ({
  MaterialLinkProps = {},
  children,
  ...props
}: LinkProps) => (
  <NextLink {...props} passHref>
    <MaterialLink {...MaterialLinkProps}>{children}</MaterialLink>
  </NextLink>
);
