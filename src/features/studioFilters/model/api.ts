import { from } from 'rxjs';
import { ShortStudio } from '../../studioList/model/types';
import {
  FetchStudiosInput,
  Filters,
  stations,
  types,
} from '../../studios/model/api';

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

export const getFilteredStudio = ({
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
