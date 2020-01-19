import * as calendar from '../../../../calendar';

export const useFunctional = () => {
  const { select } = calendar.useCalendar();
  const hasRange = select.length > 1;
  const selectedHours = select.length - 1;

  return { hasRange, selectedHours, select };
};
