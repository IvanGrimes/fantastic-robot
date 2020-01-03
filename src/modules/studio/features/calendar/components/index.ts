import dynamic from 'next/dynamic';
import { CalendarProps } from './Calendar';
import { withInjector } from './calendarInjector';

export { useInjections as useCalendarInjections } from './calendarInjector';
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

export const Calendar = withInjector(
  dynamic<CalendarProps>(() =>
    import('./Calendar').then(module => module.Calendar)
  )
);
