import React, { forwardRef } from 'react';
import NextLink from 'next/link';

export type LinkProps = { className?: string; route: string; as?: string };

export const Link = forwardRef<any, LinkProps>(
  ({ className = '', route, as, children }, ref) => (
    <NextLink href={route} as={as} passHref>
      <a className={className} ref={ref}>
        {children}
      </a>
    </NextLink>
  )
);
