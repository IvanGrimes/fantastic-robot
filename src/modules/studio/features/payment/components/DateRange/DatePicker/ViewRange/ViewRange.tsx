import React from 'react';
import { useCalendar } from '@modules/studio/features/calendar';
import { Typography } from '@material-ui/core';
import { format } from 'date-fns';

export const ViewRange = () => {
  const { from } = useCalendar();

  return (
    <Typography variant="body2">
      {format(from, 'EEEEEE, dd/MM/yyyy')}
    </Typography>
  );
};
