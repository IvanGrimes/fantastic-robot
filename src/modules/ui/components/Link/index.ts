import { ReactNode } from 'react';

export type LinkVariant = 'primary' | 'secondary';

export type LinkProps = {
  to?: string | { href: string; as: string };
  className?: string;
  children: ReactNode | ReactNode[];
  variant?: LinkVariant;
  prefetch?: boolean;
  withAnchor?: boolean;
  fluid?: boolean;
};

export { Link } from './Link';
