import React, { FunctionComponent, ReactNode } from 'react';
import { Grid, GridProps } from '@components';
import { Studio } from './Studio';
import { Studio as StudioType } from '../../../../model';

type Sizes = Pick<GridProps, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>;

const Item: FunctionComponent<Sizes> = ({ children, xs = 4, ...sizes }) => (
  <Grid item component="li" xs={4} {...sizes}>
    {children}
  </Grid>
);

export const ListItemStrategy: FunctionComponent<
  (
    | {
        entity: StudioType;
      }
    | { entity: null; children: ReactNode }
  ) &
    Sizes
> = ({ entity, children, ...sizes }) => {
  if (entity === null) {
    return <Item {...sizes}>{children}</Item>;
  }

  return (
    <Item {...sizes}>
      <Studio entity={entity} />
    </Item>
  );
};
