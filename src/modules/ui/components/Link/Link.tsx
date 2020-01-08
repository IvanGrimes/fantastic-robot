import React, { useMemo } from 'react';
import NextLink from 'next/link';
import { Link as StyledLink } from './Link.styles';
import { LinkProps } from './index';

export const Link = ({
  className = '',
  children,
  variant = 'secondary',
  to,
  prefetch,
  withAnchor = true,
  ...props
}: LinkProps) => {
  const content = useMemo(() => {
    if (withAnchor) {
      return (
        <StyledLink className={className} variant={variant}>
          {children}
        </StyledLink>
      );
    }

    return children;
  }, [children, className, variant, withAnchor]);

  if (!to) {
    return (
      <StyledLink className={className} variant={variant} as="span">
        {children}
      </StyledLink>
    );
  }

  if (typeof to === 'string') {
    return (
      <NextLink href={to} prefetch={prefetch} passHref {...props}>
        {content}
      </NextLink>
    );
  }

  return (
    <NextLink href={to.href} as={to.as} prefetch={prefetch} passHref {...props}>
      {content}
    </NextLink>
  );
};
