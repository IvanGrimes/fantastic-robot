import React, { memo } from 'react';
import { Container } from '@modules/ui/components';
import { Grid } from '@material-ui/core';
import { Photos } from './Photos';
import { MainGrid } from './Details.styles';
import { Information, InformationProps } from './Information';
import { Payment } from './Payment';
import { RoomList } from './RoomList';
import { Schedule, ScheduleProps } from './Schedule';

// TODO: Список залов
// TODO: Контакты
// TODO: Расписание
// TODO: Бронирование
// TODO: Отзывчивость

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
          <RoomList />
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
