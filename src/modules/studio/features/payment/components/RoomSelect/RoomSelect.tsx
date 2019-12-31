import React, { ChangeEvent, useCallback, useMemo } from 'react';
import { Select } from '@modules/ui';
import * as details from '@modules/studio/features/details';
import { Grid } from '@material-ui/core';
import { useCalendar } from '@modules/studio/features/calendar';
import { useCacheSelectedTime } from './useCacheSelectedTime';

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
  useCacheSelectedTime({ id: value });
  const { clearSelectedTime } = useCalendar();
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
  const onChange = useCallback(
    (ev: ChangeEvent<{ value: unknown }>) => {
      handleChange(ev);
      clearSelectedTime();
    },
    [handleChange, clearSelectedTime]
  );

  if (isLoading) {
    return <span>loading</span>;
  }

  return (
    <Grid container item>
      <Select
        isLoading={isLoading}
        options={options}
        value={value}
        handleChange={onChange}
        label="Зал"
        defaultOption={0}
      />
    </Grid>
  );
};
