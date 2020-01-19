import React from 'react';
import * as calendar from '../../../../../calendar';
import { Typography } from '@material-ui/core';
import { format } from 'date-fns';

export const ViewRange = () => {
  const { from } = calendar.useCalendar();

  return (
    <Typography variant="body2">
      {format(from, 'EEEEEE, dd/MM/yyyy')}
    </Typography>
  );
};
