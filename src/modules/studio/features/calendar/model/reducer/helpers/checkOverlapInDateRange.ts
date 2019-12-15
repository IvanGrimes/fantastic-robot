export const checkOverlapInDateRange = (
  range: number[],
  reservations: { range: number[] }[]
) =>
  reservations.some(reservation =>
    range.some(date => reservation.range.includes(date))
  );
