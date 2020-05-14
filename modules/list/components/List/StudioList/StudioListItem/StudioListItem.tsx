import React, { FunctionComponent } from 'react';
import { StudioEntity } from '../../../../../../model';

export const StudioListItem: FunctionComponent<{ entity: StudioEntity }> = ({
  entity,
}) => <li>{entity.getData().studio.id}</li>;
