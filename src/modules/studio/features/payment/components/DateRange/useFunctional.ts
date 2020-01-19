import { MouseEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { usePrevious } from '@hooks/usePrevious';
import * as calendar from '../../../calendar';

export const useFunctional = () => {
  const { selectByDate } = calendar.useCalendar();
  const [isPickerVisible, setPickerVisibility] = useState(false);
  const [pickerPosition, setPickerPosition] = useState({ x: 0, y: 0 });
  const handleOpen = useCallback((ev: MouseEvent<HTMLElement>) => {
    const { top, left } = ev.currentTarget.getBoundingClientRect();

    setPickerPosition({ x: left, y: top });
    setPickerVisibility(true);
  }, []);
  const handleClose = useCallback(() => setPickerVisibility(false), []);
  const list = useMemo(
    () =>
      Object.entries(selectByDate)
        .sort((a, b) => Number(a[0]) - Number(b[0]))
        .reduce<
          {
            key: string;
            rangeFrom?: number;
            rangeTo?: number;
            handleOpen: (ev: MouseEvent<HTMLElement>) => void;
            handleClose: () => void;
          }[]
        >(
          (acc, [key, selected]) =>
            selected.length > 1
              ? [
                  ...acc,
                  {
                    key,
                    handleOpen,
                    handleClose,
                    rangeFrom: selected[0],
                    rangeTo:
                      selected.length > 1
                        ? selected[selected.length - 1]
                        : undefined,
                  },
                ]
              : acc,
          []
        ),
    [handleClose, handleOpen, selectByDate]
  );
  const previousPickedDate = usePrevious(list.length);

  useEffect(() => {
    if (previousPickedDate !== list.length) {
      handleClose();
    }
  }, [handleClose, list.length, previousPickedDate]);

  useEffect(() => {
    window.addEventListener('scroll', handleClose);

    return () => window.removeEventListener('scroll', handleClose);
  }, [handleClose]);

  return {
    list,
    isPickerVisible,
    handleOpen,
    handleClose,
    pickerPosition,
  };
};
