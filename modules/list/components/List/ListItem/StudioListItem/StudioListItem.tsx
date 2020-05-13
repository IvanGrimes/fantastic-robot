import React, { FunctionComponent } from 'react';
import { StudioEntity } from '../../../../../../model';

export const StudioListItem: FunctionComponent<{
  entity: StudioEntity;
}> = ({ entity }) => <div>studio-list-item id is {entity.getKey()}</div>;
