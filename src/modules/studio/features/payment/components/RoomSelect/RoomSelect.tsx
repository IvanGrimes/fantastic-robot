import React, { ChangeEvent, useMemo } from 'react';
import { Select } from '@modules/ui';
import * as details from '@modules/studio/features/details';

export type RoomSelectProps = {
  isLoading?: boolean;
  list?: ReturnType<typeof details.selectors.getRooms>;
  value: string;
  handleChange: (ev: ChangeEvent<{ value: unknown }>) => void;
};

export const RoomSelect = ({
  isLoading,
  list,
  value,
  handleChange,
}: RoomSelectProps) => {
  const options = useMemo(
    () =>
      list
        ? list.map(({ id, name }) => ({
            value: id,
            label: name,
          }))
        : [],
    [list]
  );

  if (isLoading) {
    return <span>loading</span>;
  }

  return (
    <Select
      isLoading={isLoading}
      options={options}
      value={value}
      handleChange={handleChange}
      label="Зал"
      defaultOption={0}
    />
  );
};
