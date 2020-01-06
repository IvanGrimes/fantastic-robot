import dynamic from 'next/dynamic';
import { CalendarProps } from './Calendar';

export { useInjections as useCalendarInjections } from './Calendar';
export { CalendarProvider, useCalendar } from './CalendarContext';
export * from './Header';
export * from './Header/Controls';
export * from './Header/Controls/ViewColumn';
export * from './Header/Controls/ClearSelected';
export * from './Header/RangeNavigation';
export * from './Header/RangeNavigation/ViewRange';
export * from './Header/RangeNavigation/DirectionButton';
export * from './Body';
export * from './Body/WeekDay';
export * from './Body/Row';
export * from './Body/Row/Cell';

export const Calendar = dynamic<CalendarProps>(() =>
  import('./Calendar').then(module => module.Calendar)
);
