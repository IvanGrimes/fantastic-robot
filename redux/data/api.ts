import { from } from 'rxjs';
import { ShortStudio, Station } from './types';

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

const mockStudios = ({ first, last }: FetchStudiosInput): ShortStudio[] => {
  const studios: ShortStudio[] = [];

  for (let i = first; i < last; i += 1) {
    studios.push({
      id: i.toString(),
      name: `Test studio #${i}`,
      photos: new Array(5).fill({ id: '1920x1080', ratio: 16.9 }),
      priceSegment: (Math.floor(Math.random() * 3) + 1) as 1 | 2 | 3,
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
      types: new Array(3).fill(null).map((_, index) => ({
        id: index.toString(),
        name: `Test type #${index}`,
      })),
    });
  }

  return studios;
};

export type FetchStudiosInput = { first: number; last: number };

export const fetchStudios = ({ first, last }: FetchStudiosInput) =>
  from(
    new Promise<ShortStudio[]>(resolve => {
      setTimeout(
        () => {
          resolve(mockStudios({ first, last }));
        },
        typeof window !== 'undefined' ? 3000 : 0
      );
    })
  );
