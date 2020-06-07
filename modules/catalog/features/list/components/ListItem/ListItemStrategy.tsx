import React, { FunctionComponent, ReactNode } from 'react';
import { Grid, GridProps } from '@components';
import { RoomEntity, StudioEntity } from '../../internal';
import { Studio } from './Studio';
import { Room } from './Room';

type Sizes = Pick<GridProps, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>;

const Item: FunctionComponent<Sizes> = ({ children, xs = 4, ...sizes }) => (
  <Grid item component="li" xs={4} {...sizes}>
    {children}
  </Grid>
);

export const ListItemStrategy: FunctionComponent<
  (
    | {
        entity: RoomEntity | StudioEntity;
      }
    | { entity: null; children: ReactNode }
  ) &
    Sizes
> = ({ entity, children, ...sizes }) => {
  if (entity === null) {
    return <Item {...sizes}>{children}</Item>;
  }

  if (entity instanceof StudioEntity) {
    return (
      <Item {...sizes}>
        <Studio entity={entity} />
      </Item>
    );
  }

  return (
    <Item {...sizes}>
      <Room entity={entity} />
    </Item>
  );
};
