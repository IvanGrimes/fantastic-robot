import { LinkProps as NextLinkProps } from 'next/link';
import { ReactNode } from 'react';

export type LinkProps = Omit<Omit<NextLinkProps, 'passHref'>, 'href'> &
  Partial<Pick<NextLinkProps, 'href'>> & {
    className?: string;
    onClick: () => void;
    children: ReactNode | ReactNode[];
  };

export { Link } from './Link';
