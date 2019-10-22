import React, { memo } from 'react';
import { StudioCalendar } from '../../studioCalendar/components';
import {
  getStudioReservationsWithColor,
  getStudioWorkHours,
} from '../model/selectors';

type Props = {
  workHours: ReturnType<typeof getStudioWorkHours>;
  reservations: ReturnType<typeof getStudioReservationsWithColor>;
};

const _StudioDetails = ({ workHours, reservations }: Props) => {
  return <StudioCalendar workHours={workHours} reservations={reservations} />;
};

export const StudioDetails = memo(_StudioDetails);
