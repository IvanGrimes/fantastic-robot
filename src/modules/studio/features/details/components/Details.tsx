import React, { memo } from 'react';
import { Container } from '@components/Container';
import { Hero, HeroProps } from './Hero';
import { Information } from './Information';
import { RoomList } from './RoomList';
import { Schedule, ScheduleProps } from './Schedule';

type Props = HeroProps & ScheduleProps;

const _Details = ({
  isPhotosLoading,
  photoIds,
  workHours,
  reservations,
}: Props) => (
  <>
    <Hero isPhotosLoading={isPhotosLoading} photoIds={photoIds} />
    <Container>
      <Information />
      <RoomList />
      <Schedule workHours={workHours} reservations={reservations} />
    </Container>
  </>
);

export const Details = memo(_Details);
