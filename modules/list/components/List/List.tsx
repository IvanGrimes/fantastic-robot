import React, { FunctionComponent } from 'react';
import { ListServiceProps } from '../../internal';
import { ListItem } from './ListItem';

export const List: FunctionComponent<{
  list: ListServiceProps;
}> = ({ list }) => {
  if (list.isInit(list) || list.isLoading(list)) {
    return <div>loading</div>;
  }
  if (list.isFail(list)) {
    return <div>{list.error.message}</div>;
  }

  return (
    <ul>
      {list.data.map((entity) => (
        <ListItem key={entity.getKey()} studio={entity} />
      ))}
    </ul>
  );
};
