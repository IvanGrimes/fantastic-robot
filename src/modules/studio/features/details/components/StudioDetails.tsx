import React, { memo } from 'react';
import { Container } from '@components/Container';
import { Calendar } from '../../calendar';
import {
  getStudioReservationsWithColor,
  getStudioWorkHours,
} from '../model/selectors';

type Props = {
  workHours: ReturnType<typeof getStudioWorkHours>;
  reservations: ReturnType<typeof getStudioReservationsWithColor>;
};

const _StudioDetails = ({ workHours, reservations }: Props) => (
  <Container>
    <Calendar workHours={workHours} reservations={reservations} />
  </Container>
);

export const StudioDetails = memo(_StudioDetails);
