import { LinkProps as NextLinkProps } from 'next/link';
import { LinkProps as MaterialLinkProps } from '@material-ui/core/Link';

export type LinkProps = Pick<MaterialLinkProps, 'children'> &
  Exclude<NextLinkProps, 'passHref'> & {
    className?: string;
    MaterialLinkProps?: Exclude<MaterialLinkProps, 'children'>;
  };

export { Link } from './Link';
