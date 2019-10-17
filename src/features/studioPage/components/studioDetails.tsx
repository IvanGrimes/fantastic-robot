import React, { memo } from 'react';
import { StudioCalendar } from '../../studioCalendar/components';
import { getStudioReservations } from '../model/selectors';

type Props = {
  reservations: ReturnType<typeof getStudioReservations>;
};

const _StudioDetails = ({ reservations }: Props) => {
  return <StudioCalendar reservations={reservations} />;
};

export const StudioDetails = memo(_StudioDetails);
