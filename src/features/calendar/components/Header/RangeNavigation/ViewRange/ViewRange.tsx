import React, { useContext, useMemo, Fragment } from 'react';
import { format, getYear } from 'date-fns';
import { Typography } from '@material-ui/core';
import { CalendarContext } from '../../../CalendarContainer';
import { Wrapper } from './ViewRange.styles';

export const ViewRange = () => {
  const { from, to, step } = useContext(CalendarContext);
  const yearRange = useMemo(() => {
    const fromYear = getYear(from);
    const toYear = getYear(to);

    return fromYear === toYear ? (
      fromYear
    ) : (
      <Fragment>
        {fromYear} &mdash; {toYear}
      </Fragment>
    );
  }, [from, to]);

  return (
    <Wrapper>
      <Typography variant="body1" align="center" gutterBottom>
        {yearRange}
      </Typography>
      <Typography variant="body2">
        {step === 0 ? (
          format(new Date(from), 'dd MMMM')
        ) : (
          <Fragment>
            {format(new Date(from), 'dd MMMM')} &mdash;{' '}
            {format(new Date(to), 'dd MMMM')}
          </Fragment>
        )}
      </Typography>
    </Wrapper>
  );
};
