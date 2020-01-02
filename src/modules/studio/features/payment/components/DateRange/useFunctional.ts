import { useCalendar } from '@modules/studio/features/calendar';
import { useCallback, useEffect, useState } from 'react';

export const useFunctional = () => {
  const { getSelectFrom, getSelectTo } = useCalendar();
  const rangeFrom = getSelectFrom();
  const rangeTo = getSelectTo();
  const [isPickerActive, setPickerActivity] = useState(false);
  const handleOpenPicker = useCallback(() => setPickerActivity(true), []);
  const handleClosePicker = useCallback(() => setPickerActivity(false), []);

  useEffect(() => {
    if (rangeFrom && rangeTo) {
      handleClosePicker();
    }
  }, [handleClosePicker, rangeFrom, rangeTo]);

  return {
    handleClosePicker,
    handleOpenPicker,
    isPickerActive,
    rangeFrom,
    rangeTo,
  };
};
