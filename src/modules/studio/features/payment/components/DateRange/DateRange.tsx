import React, { useCallback, useEffect, useState } from 'react';
import { ClickAwayListener } from '@material-ui/core';
import { useCalendar } from '@modules/studio/features/calendar';
import { format } from 'date-fns';
import { Grid } from './DateRange.styles';
import { Input } from './Input';
import { DatePicker } from './DatePicker';

const formatDate = (date?: number) => {
  if (typeof date === 'number') {
    return format(date, 'dd/MM/yyyy HH:mm');
  }

  return date;
};

export const DateRange = () => {
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

  return (
    <ClickAwayListener onClickAway={handleClosePicker}>
      <Grid container item>
        <Input
          fromDate={formatDate(rangeFrom)}
          toDate={formatDate(rangeTo)}
          isFromActive={!rangeFrom}
          isToActive={!rangeTo}
          onClick={handleOpenPicker}
        />
        <DatePicker isActive={isPickerActive} />
      </Grid>
    </ClickAwayListener>
  );
};
