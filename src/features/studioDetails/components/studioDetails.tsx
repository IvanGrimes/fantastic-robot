import React, { memo } from 'react';
import { Calendar } from '../../calendar/components';
import {
  getStudioReservationsWithColor,
  getStudioWorkHours,
} from '../model/selectors';
import { Container } from '../../../components/Container';

type Props = {
  workHours: ReturnType<typeof getStudioWorkHours>;
  reservations: ReturnType<typeof getStudioReservationsWithColor>;
};

const _StudioDetails = ({ workHours, reservations }: Props) => {
  return (
    <Container>
      <Calendar workHours={workHours} reservations={reservations} />
    </Container>
  );
};

export const StudioDetails = memo(_StudioDetails);
