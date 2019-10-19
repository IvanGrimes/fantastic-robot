import React, { memo } from 'react';
import { StudioCalendar } from '../../studioCalendar/components';
import { getStudioReservations, getStudioWorkHours } from '../model/selectors';

type Props = {
  workHours: ReturnType<typeof getStudioWorkHours>;
  reservations: ReturnType<typeof getStudioReservations>;
};

const _StudioDetails = ({ workHours, reservations }: Props) => {
  return <StudioCalendar workHours={workHours} reservations={reservations} />;
};

export const StudioDetails = memo(_StudioDetails);
