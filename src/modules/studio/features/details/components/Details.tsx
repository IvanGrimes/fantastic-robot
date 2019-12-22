import React, { memo } from 'react';
import { Container } from '@modules/ui/components';
import { Photos } from './Photos';
import { Information, InformationProps } from './Information';
import { RoomList } from './RoomList';
import { Schedule, ScheduleProps } from './Schedule';

type Props = {
  isLoading: boolean;
  photoIds: string[];
  information: InformationProps['information'];
} & Omit<InformationProps, 'data'> &
  ScheduleProps;

const _Details = ({
  isLoading,
  photoIds,
  workHours,
  reservations,
  isMetroListLoading,
  isConfigLoading,
  information,
  config,
  metroList,
}: Props) => (
  <>
    <Photos isLoading={isLoading} photoIds={photoIds} />
    <Container variant="secondary">
      <Information
        isLoading={isLoading}
        isConfigLoading={isConfigLoading}
        isMetroListLoading={isMetroListLoading}
        information={information}
        metroList={metroList}
        config={config}
      />
      <RoomList />
      {false && <Schedule workHours={workHours} reservations={reservations} />}
    </Container>
  </>
);

export const Details = memo(_Details);
