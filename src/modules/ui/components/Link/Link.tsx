import React from 'react';
import NextLink from 'next/link';
import { Link as StyledLink } from './Link.styles';
import { LinkProps } from './index';

export const Link = ({
  className = '',
  children,
  href = '',
  variant = 'secondary',
  ...props
}: LinkProps) => {
  if (!href) {
    return (
      <StyledLink className={className} variant={variant} as="span">
        {children}
      </StyledLink>
    );
  }

  return (
    <NextLink {...props} href={href} passHref>
      <StyledLink className={className} variant={variant}>
        {children}
      </StyledLink>
    </NextLink>
  );
};
