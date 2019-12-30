import dynamic from 'next/dynamic';
import { CalendarProps } from './Calendar';

export { CalendarProvider, useCalendar } from './CalendarContext';

export const Calendar = dynamic<CalendarProps>(() =>
  import('./Calendar').then(module => module.Calendar)
);
