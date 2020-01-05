import { createContext, useContext } from 'react';
import { DetailsMapState, DetailsNewContainerProps } from './DetailsContainer';

type DetailsContextType = Pick<DetailsNewContainerProps, 'variant'> &
  Omit<Omit<DetailsMapState, 'isInformationLoading'>, 'information'> & {
    isStudioLoading: DetailsMapState['isInformationLoading'];
    studio: DetailsMapState['information'];
  };

const DetailsContext = createContext<DetailsContextType>({
  variant: 'room',
  isStudioLoading: true,
  studio: {
    id: '',
    name: '',
    roomsCount: 0,
    stationIds: [],
    equipmentIds: [],
    photoIds: [],
    interiorIds: [],
    description: '',
    hasOnlinePayment: false,
    location: {
      lat: 0,
      lng: 0,
    },
    cityId: '',
    priceType: '1',
    dressingRoom: {
      has: false,
      calendarId: null,
      capacity: null,
    },
    contacts: {
      site: null,
      instagram: null,
      email: null,
      phone: '',
      vk: '',
    },
    workingHours: {
      from: 0,
      to: 0,
      utc: '+0',
    },
  },
  isRoomLoading: true,
  room: {
    photoIds: [],
    name: '',
    interiorIds: [],
    id: '',
    averagePrice: 0,
    studioId: '',
    color: '',
    calendarUrl: '',
    photoExamples: [],
  },
  isConfigLoading: true,
  config: {
    price: [],
    equipment: [],
    interior: [],
    context: [],
  },
  isMetroListLoading: true,
  metroList: [],
  workHours: {},
  reservations: {},
  rooms: [],
  isRoomsLoading: true,
});

export const DetailsProvider = DetailsContext.Provider;

export const useDetails = () => useContext(DetailsContext);
