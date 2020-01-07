import React from 'react';
import NextLink from 'next/link';
import { Link as StyledLink } from './Link.styles';
import { LinkProps } from './index';

export const Link = ({
  className = '',
  children,
  href = '',
  onClick,
  ...props
}: LinkProps) => {
  if (!href) {
    return (
      <StyledLink className={className} onClick={onClick} as="span">
        {children}
      </StyledLink>
    );
  }

  return (
    <NextLink {...props} href={href} passHref>
      <StyledLink className={className}>{children}</StyledLink>
    </NextLink>
  );
};
