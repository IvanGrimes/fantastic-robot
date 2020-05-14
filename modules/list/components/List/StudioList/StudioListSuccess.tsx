import React from 'react';
import { SuccessComponent } from '../../../../../model';
import { StudioListServiceProps } from '../../../internal';
import { StudioListItem } from './StudioListItem';

export const StudioListSuccess: SuccessComponent<StudioListServiceProps> = ({
  service,
}) => (
  <ul>
    {service.data.map((entity) => (
      <StudioListItem key={entity.getData().studio.id} entity={entity} />
    ))}
  </ul>
);
