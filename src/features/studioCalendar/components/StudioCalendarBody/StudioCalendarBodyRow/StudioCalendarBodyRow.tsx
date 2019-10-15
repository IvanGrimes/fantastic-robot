import React from 'react';

type StudioCalendarBodyRowProps = {
  data: [string, ...number[]];
};

export const StudioCalendarBodyRow = ({ data }: StudioCalendarBodyRowProps) => {
  return (
    <tr>
      {data.map(item => (
        <td key={item}>{item}</td>
      ))}
    </tr>
  );
};
