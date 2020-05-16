import React, { FunctionComponent } from 'react';
import { StudioEntity } from '../../../../../model/entities';

export const Studio: FunctionComponent<{ entity: StudioEntity }> = ({
  entity,
}) => <li>studio id is {entity.getData().studio.id}</li>;
