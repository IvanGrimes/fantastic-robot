import React, { memo } from 'react';
import { Container } from '@components/Container';
import { Hero } from './Hero';
import { Information } from './Information';
import { RoomList } from './RoomList';
import { Schedule, ScheduleProps } from './Schedule';

type Props = ScheduleProps;

const _Details = ({ workHours, reservations }: Props) => (
  <Container>
    <Hero />
    <Information />
    <RoomList />
    <Schedule workHours={workHours} reservations={reservations} />
  </Container>
);

export const Details = memo(_Details);
