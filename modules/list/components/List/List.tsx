import React, { FunctionComponent } from 'react';
import { ServiceProps } from './types';
import { ListItem } from './ListItem';
import { renderService } from '../../../../model';

export const List: FunctionComponent<ServiceProps> = ({
  studioList,
  roomList,
}) => {
  if (studioList) {
    renderService(studioList)({
      Loading: () => <div>studio list is loading</div>,
      Fail: () => <div>studio list has error</div>,
      Success: ({ service }) => (
        <ul>
          {service.data.map((entity) => (
            <ListItem key={entity.getKey()} entity={entity} />
          ))}
        </ul>
      ),
    });
  }

  if (roomList) {
    return renderService(roomList)({
      Loading: () => <div>room list is loading</div>,
      Fail: () => <div> room list has error</div>,
      Success: ({ service }) => {
        console.log(service);
        return (
          <ul>
            {service.data.map((entity) => (
              <ListItem key={entity.getData().id} entity={entity} />
            ))}
          </ul>
        );
      },
    });
  }

  return null;
};
