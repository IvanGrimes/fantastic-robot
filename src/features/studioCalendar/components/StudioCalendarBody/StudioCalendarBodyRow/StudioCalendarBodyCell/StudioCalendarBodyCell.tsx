import React from 'react';

type StudioCalendarBodyCellProps = {
  timestamp: number;
};

export const StudioCalendarBodyCell = ({
  timestamp,
}: StudioCalendarBodyCellProps) => {
  return <td>{timestamp}</td>;
};
