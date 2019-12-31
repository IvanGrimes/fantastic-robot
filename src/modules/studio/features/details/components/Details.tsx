import React from 'react';
import * as data from '@modules/studio/features/data';
import { Nullable } from '@utils/Nullable';
import { Container } from '@modules/ui';
import { Grid } from '@material-ui/core';
import { Payment } from '@modules/studio/features/payment';
import { MainGrid } from './Details.styles';
import { getRoomById, getRooms } from '../model/selectors';
import { Header } from './Header';
import { Specifications } from './Specifications';
import { Photos } from './Photos';
import { Description } from './Description';
import { RoomList } from './RoomList';
import { ScheduleProps, Schedule } from './Schedule';

// TODO: Контакты
// TODO: Расписание
// TODO: Отображать студию, которой принадлежит зал
// TODO: Скелетоны
// TODO: Отзывчивость
// TODO: Оптимизация
// TODO: connect => useSelector/useDispatch ?

export type DetailsOwnProps = {
  information: {
    isLoading: boolean;
    title: string;
    photoIds: string[];
    roomsCount?: number;
    interiorIds?: string[];
    stationIds?: string[];
    equipmentIds?: string[];
    description?: string;
    hasOnlinePayment?: boolean;
    price: data.PriceType | number;
  };
  dressingRoom?: {
    has: boolean;
    calendarId: Nullable<string>;
    capacity: Nullable<number>;
  };
  workingHours?: {
    from: number;
    to: number;
    utc: string;
  };
  contacts?: {
    address: string;
    site: Nullable<string>;
    instagram: Nullable<string>;
    email: Nullable<string>;
    phone: string;
    vk: Nullable<string>;
  };
  rooms?: {
    isLoading: boolean;
    list: ReturnType<typeof getRooms>;
  };
  room?: {
    isLoading: boolean;
    data: ReturnType<typeof getRoomById>;
  };
  schedule: ScheduleProps;
};

type ConfigProps = {
  isMetroListLoading: ReturnType<typeof data.selectors.getMetroListLoading>;
  isConfigLoading: ReturnType<typeof data.selectors.getConfigLoading>;
  metroList: ReturnType<typeof data.selectors.getMetroList>;
  config: ReturnType<typeof data.selectors.getConfig>;
};

type Props = DetailsOwnProps & ConfigProps;

export const Details = ({
  information,
  isConfigLoading,
  config,
  isMetroListLoading,
  metroList,
  rooms,
  room,
  schedule,
}: Props) => {
  return (
    <>
      <Photos
        isLoading={information.isLoading}
        photoIds={information.photoIds}
      />
      <Container variant="secondary">
        <MainGrid container justify="space-between">
          <Grid item xs={7}>
            <Header
              isLoading={information.isLoading}
              title={information.title}
              priceType={information.price}
            />
            <Specifications
              isLoading={information.isLoading}
              isConfigLoading={isConfigLoading}
              interiorIds={information.interiorIds}
              config={config}
              equipmentIds={information.equipmentIds}
              isMetroListLoading={isMetroListLoading}
              stationIds={information.stationIds}
              metroList={metroList}
              roomsCount={information.roomsCount}
            />
            <Description content={information.description} />
            {rooms && (
              <RoomList
                rooms={rooms.list}
                isRoomsLoading={rooms.isLoading}
                config={config}
                isConfigLoading={isConfigLoading}
              />
            )}
            {false && <Schedule {...schedule} />}
          </Grid>
          <Grid item xs={4}>
            {rooms && (
              <Payment
                variant="studio"
                isRoomsLoading={rooms.isLoading}
                rooms={rooms.list}
              />
            )}
            {room && (
              <Payment
                variant="room"
                isRoomLoading={room.isLoading}
                room={room.data}
              />
            )}
          </Grid>
        </MainGrid>
      </Container>
    </>
  );
};
