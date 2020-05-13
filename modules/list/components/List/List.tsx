import React, { FunctionComponent } from 'react';
import { ListServiceProps } from '../../internal';

export const List: FunctionComponent<{
  list: ListServiceProps;
}> = ({ list }) => {
  if (list.isLoading(list)) {
    return <div>loading</div>;
  }
  if (list.isFail(list)) {
    return <div>{list.error.message}</div>;
  }

  return (
    <ul>
      {list.data.map((entity) => {
        const { studio } = entity.getData();

        return <li key={studio.id}>{studio.id}</li>;
      })}
    </ul>
  );
};
