import React, { memo } from 'react';
import { Container } from '@modules/ui/components';
import { Grid } from '@material-ui/core';
import { Payment } from '@modules/studio/features/payment';
import { Photos } from './Photos';
import { MainGrid } from './Details.styles';
import { Information, InformationProps } from './Information';
import { RoomList, RoomListProps } from './RoomList';
import { Schedule, ScheduleProps } from './Schedule';

// TODO: Бронирование
// TODO: Расписание
// TODO: Контакты
// TODO: Скелетоны
// TODO: Отзывчивость
// TODO: Оптимизация

type Props = {
  isLoading: boolean;
  photoIds: string[];
  information: InformationProps['information'];
} & Omit<InformationProps, 'data'> &
  ScheduleProps &
  RoomListProps;

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
  isRoomsLoading,
  rooms,
}: Props) => (
  <>
    <Photos isLoading={isLoading} photoIds={photoIds} />
    <Container variant="secondary">
      <MainGrid container>
        <Grid item xs={8}>
          <Information
            isLoading={isLoading}
            isConfigLoading={isConfigLoading}
            isMetroListLoading={isMetroListLoading}
            information={information}
            metroList={metroList}
            config={config}
          />
          <RoomList
            rooms={rooms}
            isRoomsLoading={isRoomsLoading}
            config={config}
            isConfigLoading={isConfigLoading}
          />
          {false && (
            <Schedule workHours={workHours} reservations={reservations} />
          )}
        </Grid>
        <Grid item xs={4}>
          <Payment />
        </Grid>
      </MainGrid>
    </Container>
  </>
);

export const Details = memo(_Details);
