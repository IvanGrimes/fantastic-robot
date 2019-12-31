import React from 'react';
import { IconButton } from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import { useCalendar } from '../../../CalendarContext';

export const ClearSelected = () => {
  const { clearSelectedTime } = useCalendar();

  return (
    <IconButton size="small" onClick={clearSelectedTime}>
      <Clear />
    </IconButton>
  );
};
