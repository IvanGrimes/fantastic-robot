import {
  PriceSegment,
  ShortStudio,
  Station,
  StudioType,
} from '../../studioList/model/types';
import { getFilteredStudio } from '../../studioFilters/model/api';

export const stations: Station[] = [
  {
    id: '3.161',
    name: 'Электрозаводская',
    color: '#0072BA',
    line: '3',
  },
  {
    id: '7.16',
    name: 'Баррикадная',
    color: '#943E90',
    line: '7',
  },
  {
    id: '5.71',
    name: 'Курская',
    color: '#915133',
    line: '5',
  },
];

export const types: StudioType[] = [
  {
    id: '1',
    name: 'Test type #1',
  },
  {
    id: '2',
    name: 'Test type #3',
  },
  {
    id: '3',
    name: 'Test type #3',
  },
];

export type FetchStudiosInput = {
  page?: number;
  name?: string;
  typeIds?: string[];
  priceSegments?: PriceSegment[];
  roomsCount?: {
    from?: number;
    to?: number;
  };
  favorite?: boolean;
  stationIds?: string[];
};

export type Filters = {
  stations: Station[];
  types: StudioType[];
  priceSegments: PriceSegment[];
  roomsCount: {
    from: number;
    to: number;
  };
};

export const mockStudios = ({
  page = 1,
  stationIds = [],
  roomsCount = {},
  priceSegments = [],
  name = '',
  favorite,
  typeIds = [],
}: FetchStudiosInput): { studios: ShortStudio[]; hasNext: boolean } => {
  const studios: ShortStudio[] = [];

  if (
    stationIds.length ||
    roomsCount.from ||
    roomsCount.to ||
    priceSegments.length ||
    name ||
    typeIds.length ||
    typeof favorite !== 'undefined'
  ) {
    return {
      studios: getFilteredStudio({
        name,
        typeIds,
        roomsCount,
        priceSegments,
        stationIds,
        favorite,
      }),
      hasNext: false,
    };
  }

  for (let i = (page - 1) * 6; i < page * 6; i += 1) {
    // @ts-ignore
    // @ts-ignore
    studios.push({
      id: i.toString(),
      name: `Test studio #${i}`,
      photos: new Array(5).fill({ id: '1920x1080', ratio: 16.9 }),
      priceSegments: (Math.floor(Math.random() * 3) + 1) as 1 | 2 | 3,
      roomsCount: Math.floor(Math.random() * 10) + 1,
      description:
        'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.',
      stations:
        i % 2
          ? [
              stations[Math.floor(Math.random() * 3)],
              stations[Math.floor(Math.random() * 3)],
            ]
          : [stations[Math.floor(Math.random() * 3)]],
      types:
        i % 2
          ? [
              types[Math.floor(Math.random() * 3)],
              types[Math.floor(Math.random() * 3)],
            ]
          : [types[Math.floor(Math.random() * 3)]],
      favorite: Boolean(i % 2),
      // @ts-ignore
      lat: parseFloat(`59.9${i + (Math.random() * 100).toFixed() * i}13`),
      // @ts-ignore
      lng: parseFloat(`30.${i + (Math.random() * 10).toFixed() * i * 4}3344`),
    });
  }

  return { studios, hasNext: true };
};
