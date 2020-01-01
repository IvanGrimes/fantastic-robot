import React, { ChangeEvent, useCallback, useMemo } from 'react';
import { Hidden, Select } from '@modules/ui';
import * as details from '@modules/studio/features/details';
import { Grid } from '@material-ui/core';
import { useCalendar } from '@modules/studio/features/calendar';
import { useMediaQuery } from '@modules/ui/hooks';
import { useCacheSelectedTime } from './useCacheSelectedTime';

export type RoomSelectProps = {
  isLoading?: boolean;
  list?: ReturnType<typeof details.selectors.getRooms>;
  value: string;
  handleChange: (ev: ChangeEvent<{ value: unknown }>) => void;
  largeTabletQuery: string;
};

export const RoomSelect = ({
  isLoading,
  list,
  value,
  handleChange,
  largeTabletQuery,
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
  const desktopMatches = useMediaQuery(largeTabletQuery);

  if (desktopMatches) {
    return null;
  }

  if (isLoading) {
    return (
      <Hidden query={largeTabletQuery}>
        <span>loading</span>
      </Hidden>
    );
  }

  return (
    <Grid container item>
      <Hidden query={largeTabletQuery}>
        <Select
          isLoading={isLoading}
          options={options}
          value={value}
          handleChange={onChange}
          label="Зал"
          defaultOption={0}
        />
      </Hidden>
    </Grid>
  );
};
