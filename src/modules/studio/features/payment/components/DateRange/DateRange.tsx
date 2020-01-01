import React, { useCallback, useEffect, useState } from 'react';
import { ClickAwayListener } from '@material-ui/core';
import { useCalendar } from '@modules/studio/features/calendar';
import { format } from 'date-fns';
import { useMediaQuery } from '@modules/ui/hooks';
import { Hidden } from '@modules/ui';
import { Grid } from './DateRange.styles';
import { Input } from './Input';
import { DatePicker } from './DatePicker';

type Props = {
  largeTabletQuery: string;
};

const formatDate = (date?: number) => {
  if (typeof date === 'number') {
    return format(date, 'dd/MM/yyyy HH:mm');
  }

  return date;
};

export const DateRange = ({ largeTabletQuery }: Props) => {
  const { getSelectFrom, getSelectTo } = useCalendar();
  const rangeFrom = getSelectFrom();
  const rangeTo = getSelectTo();
  const [isPickerActive, setPickerActivity] = useState(false);
  const handleOpenPicker = useCallback(() => setPickerActivity(true), []);
  const handleClosePicker = useCallback(() => setPickerActivity(false), []);
  const largeTabletMatches = useMediaQuery(largeTabletQuery);

  useEffect(() => {
    if (rangeFrom && rangeTo) {
      handleClosePicker();
    }
  }, [handleClosePicker, rangeFrom, rangeTo]);

  if (largeTabletMatches) {
    return null;
  }

  return (
    <ClickAwayListener onClickAway={handleClosePicker}>
      <Grid container item>
        <Hidden query={largeTabletQuery}>
          <Input
            fromDate={formatDate(rangeFrom)}
            toDate={formatDate(rangeTo)}
            isFromActive={!rangeFrom}
            isToActive={!rangeTo}
            onClick={handleOpenPicker}
          />
          <DatePicker isActive={isPickerActive} />
        </Hidden>
      </Grid>
    </ClickAwayListener>
  );
};
