import React, { FunctionComponent } from 'react';
import { StudioEntity } from '../../../../model';

export const Studio: FunctionComponent<{ entity: StudioEntity }> = ({
  entity,
}) => <li>studio id is {entity.getData().studio.id}</li>;
