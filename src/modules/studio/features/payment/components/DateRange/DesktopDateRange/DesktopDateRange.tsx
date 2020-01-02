import React from 'react';
import { ClickAwayListener } from '@material-ui/core';
import { Grid } from './DateRange.styles';
import { Input } from '../Input';
import { DatePicker } from '../DatePicker';
import { useFunctional } from '../useFunctional';

export const DesktopDateRange = () => {
  const {
    handleClosePicker,
    rangeFrom,
    rangeTo,
    handleOpenPicker,
    isPickerActive,
  } = useFunctional();

  return (
    <ClickAwayListener onClickAway={handleClosePicker}>
      <Grid container item>
        <Input
          fromDate={rangeFrom}
          toDate={rangeTo}
          isFromActive={!rangeFrom}
          isToActive={!rangeTo}
          onClick={handleOpenPicker}
        />
        <DatePicker isActive={isPickerActive} />
      </Grid>
    </ClickAwayListener>
  );
};
