import React from 'react';
import { InitComponent } from '@model';
import { Skeleton } from '@material-ui/lab';
import { ListService } from './types';
import { ListItem } from './ListItem';
import { Studio } from './ListItem/Studio';

const skeleton = (
  <ListItem entity={null}>
    <Skeleton variant="rect" width="100%">
      <Studio />
    </Skeleton>
  </ListItem>
);

const skeletonList = new Array(9).fill(skeleton);

export const ListInit: InitComponent<ListService> = () => <>{skeletonList}</>;
