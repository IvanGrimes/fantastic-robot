import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import { Select } from '@modules/ui';
import * as details from '@modules/studio/features/details';
import { Grid } from '@material-ui/core';
import { useCalendar } from '@modules/studio/features/calendar';

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
  const { clearSelectedTime, select, selectTime } = useCalendar();
  const [selectedTimeCache, pushSelectedTime] = useReducer(
    (state: Partial<{ [key: string]: number[] }>, selectedTime: number[]) => ({
      ...state,
      [value]: selectedTime,
    }),
    {}
  );
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

  useEffect(() => {
    const cache = selectedTimeCache[value];

    if (cache && cache.length && !select.length) {
      const cacheLength = cache.length;

      selectTime(cache[0]);

      if (cacheLength > 1) {
        selectTime(cache[cacheLength - 1]);
      }
    }
    if (!cache || select !== cache) {
      pushSelectedTime(select);
    }
  }, [select, selectTime, selectedTimeCache, value]);

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
