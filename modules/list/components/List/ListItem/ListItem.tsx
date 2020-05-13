import React, { FunctionComponent } from 'react';
import { StudioEntity } from '../../../../../model/entities';

export const ListItem: FunctionComponent<{ studio: StudioEntity }> = ({
  studio,
}) => {
  const {
    studio: { id },
  } = studio.getData();

  return (
    <div>
      <h6>{id}</h6>
    </div>
  );
};
