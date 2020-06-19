import React, { Fragment } from 'react';
import { Skeleton } from '@components';
import { ListItem } from './ListItem';
import { Studio } from './ListItem/Studio';

const skeleton = (
  <ListItem entity={null}>
    <Skeleton variant="rect" width="100%">
      <Studio />
    </Skeleton>
  </ListItem>
);

const skeletonList = new Array(9).fill(null).map((_item, index) => (
  // eslint-disable-next-line react/no-array-index-key
  <Fragment key={index}>{skeleton}</Fragment>
));

export const ListInit = () => <>{skeletonList}</>;
