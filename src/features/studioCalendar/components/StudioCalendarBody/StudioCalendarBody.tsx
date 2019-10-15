import React, { useContext, useMemo } from 'react';
import { isAfter, isBefore } from 'date-fns';
import { compose } from 'ramda';
import { StudioCalendarContext } from '../StudioCalendarContainer';
import { DateMonad } from '../../utils/DateMonad';
import { StudioCalendarBodyRow } from './StudioCalendarBodyRow';

type DateRange = DateMonad[];

type Timeline = string[];

const mapToDateRange = (from: DateMonad, to: DateMonad) => {
  const dateRange: DateRange = [];

  for (let i: DateMonad = from; !isAfter(i.value, to.value); i = i.addDays(1)) {
    dateRange.push(i);
  }

  return dateRange;
};

const sortAsc = (range: DateRange) =>
  range.slice().sort((a, b) => (isBefore(a.value, b.value) ? -1 : 1));

const mapTimelineToDateRange = (timeline: Timeline) => (range: DateRange) =>
  timeline.reduce<[string, ...number[]][]>(
    (acc, time) => [
      ...acc,
      [
        time,
        ...range.map(
          item => item.setHours(Number(time.split(':')[0])).timestamp
        ),
      ],
    ],
    []
  );

const mapBody = (timeline: Timeline) =>
  compose(
    mapTimelineToDateRange(timeline),
    sortAsc,
    mapToDateRange
  );

export const StudioCalendarBody = () => {
  const { timeline, from, to } = useContext(StudioCalendarContext);
  const grid = useMemo(() => mapBody(timeline)(from, to), [from, timeline, to]);

  return (
    <div>
      <table>
        {grid.map(row => (
          <StudioCalendarBodyRow data={row} />
        ))}
      </table>
    </div>
  );
};
