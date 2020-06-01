import React, { FunctionComponent, ReactNode } from 'react';
import { RoomEntity, StudioEntity } from '@model';
import { Grid, GridProps } from '@components';
import { Studio } from './Studio';
import { Room } from './Room';

type Sizes = Pick<GridProps, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>;

const Item: FunctionComponent<Sizes> = ({ children, xs = 4, ...sizes }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
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
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Item {...sizes}>{children}</Item>
    );
  }

  if (entity instanceof StudioEntity) {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Item {...sizes}>
        <Studio entity={entity} />
      </Item>
    );
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Item {...sizes}>
      <Room entity={entity} />
    </Item>
  );
};
