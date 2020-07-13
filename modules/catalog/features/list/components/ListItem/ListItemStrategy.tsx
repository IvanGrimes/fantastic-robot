import React, { FunctionComponent, ReactNode } from 'react';
import { Grid, GridProps } from '@components';
import { Studio } from './Studio';
import { Room } from './Room';
import { Studio as StudioType, Room as RoomType } from '../../../../model';

type Sizes = Pick<GridProps, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>;

const Item: FunctionComponent<Sizes> = ({ children, xs = 4, ...sizes }) => (
  <Grid item component="li" xs={4} {...sizes}>
    {children}
  </Grid>
);

export const ListItemStrategy: FunctionComponent<
  (
    | {
        entity: StudioType | RoomType;
      }
    | { entity: null; children: ReactNode }
  ) &
    Sizes
> = ({ entity, children, ...sizes }) => {
  if (entity === null) {
    return <Item {...sizes}>{children}</Item>;
  }

  if ('photoExamples' in entity) {
    return (
      <Item {...sizes}>
        <Room entity={entity as RoomType} />
      </Item>
    );
  }

  return (
    <Item {...sizes}>
      <Studio entity={entity} />
    </Item>
  );
};
