import React, { FunctionComponent } from 'react';
import { StudioEntity } from '@model';

export const Studio: FunctionComponent<{ entity: StudioEntity }> = ({
  entity,
}) => (
  <li style={{ listStyleType: 'none' }}>
    studio id is {entity.getData().studio.id}
  </li>
);
