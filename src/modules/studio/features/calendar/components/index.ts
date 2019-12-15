import dynamic from 'next/dynamic';
import { CalendarProps } from './CalendarContainer';

export const Calendar = dynamic<CalendarProps>(() =>
  import('./CalendarContainer').then(module => module.CalendarContainer)
);
