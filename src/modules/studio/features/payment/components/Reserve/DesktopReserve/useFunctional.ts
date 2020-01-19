import { useCalendar } from '@modules/studio/features/calendar';

export const useFunctional = () => {
  const { select } = useCalendar();
  const hasRange = select.length > 1;
  const selectedHours = select.length - 1;

  return { hasRange, selectedHours, select };
};
