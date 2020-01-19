import { ChangeEvent, useCallback, useMemo } from 'react';
import * as calendar from '../../../calendar';
import * as details from '../../../details';
import { useCacheSelectedTime } from './useCacheSelectedTime';

export type UseFunctionalProps = {
  list?: ReturnType<typeof details.selectors.getRooms>;
  value: string;
  handleChange: (ev: ChangeEvent<{ value: unknown }>) => void;
};

export const useFunctional = ({
  list,
  value,
  handleChange,
}: UseFunctionalProps) => {
  useCacheSelectedTime({ id: value });
  const { clearSelectedTime } = calendar.useCalendar();
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

  return { options, onChange };
};
