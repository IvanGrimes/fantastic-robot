import { from } from 'rxjs';
import { PriceSegment, ShortStudio, Station, StudioType } from './types';

const stations: Station[] = [
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

const types: StudioType[] = [
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

export const fetchFilters = () =>
  from(
    new Promise<Filters>(resolve =>
      setTimeout(
        () =>
          resolve({
            stations,
            types,
            priceSegments: [1, 2, 3],
            roomsCount: {
              from: 2,
              to: 12,
            },
          }),
        typeof window !== 'undefined' ? 1000 : 0
      )
    )
  );

const getFilteredStudio = ({
  name,
  typeIds = [],
  priceSegments = [],
  stationIds = [],
}: Omit<FetchStudiosInput, 'page'>): ShortStudio[] => [
  {
    id: Math.random().toString(),
    name: name || 'Test studio #65345',
    types: typeIds.length
      ? types.filter(({ id }) => typeIds.includes(id))
      : types,
    favorite: false,
    roomsCount: 4,
    stations: stationIds.length
      ? stations.filter(({ id }) => stationIds.includes(id))
      : stations,
    priceSegments: priceSegments[0] || 2,
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.',
    photos: new Array(5).fill({ id: '1920x1080', ratio: 16.9 }),
    lat: 59.955413,
    lng: 30.337844,
  },
];

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
      lat: 59.955413,
      lng: 30.337844,
    });
  }

  return { studios, hasNext: true };
};

export const fetchStudios = (input: FetchStudiosInput) => {
  console.log(input);
  return from(
    new Promise<ReturnType<typeof mockStudios>>(resolve => {
      setTimeout(
        () => {
          resolve(mockStudios(input));
        },
        typeof window !== 'undefined' ? 3000 : 0
      );
    })
  );
};

export const toggleFavorite = (id: string) =>
  from(
    new Promise<{ id: string; success: boolean }>(resolve => {
      setTimeout(() => {
        resolve({ id, success: true });
      }, 1000);
    }).then(({ id: _id, success }) => {
      if (!success) throw new Error('Fail');

      return { id: _id };
    })
  );
