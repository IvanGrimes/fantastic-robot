import { usePrevious } from '@hooks/usePrevious';
import { useEffect, useReducer } from 'react';
import * as calendar from '../../../calendar';

export const useCacheSelectedTime = ({ id }: { id: string | number }) => {
  const { select, selectTime } = calendar.useCalendar();
  const prevId = usePrevious(id);
  const [selectedTimeCache, pushSelectedTime] = useReducer(
    (state: Partial<{ [key: string]: number[] }>, selectedTime: number[]) => ({
      ...state,
      [id]: selectedTime,
    }),
    {}
  );

  useEffect(() => {
    const cache = selectedTimeCache[id];

    if (prevId !== id && cache && cache.length && !select.length) {
      const cacheLength = cache.length;

      selectTime(cache[0]);

      if (cacheLength > 1) {
        selectTime(cache[cacheLength - 1]);
      }
    }
    if (!cache || select !== cache) {
      pushSelectedTime(select);
    }
  }, [prevId, select, selectTime, selectedTimeCache, id]);
};
