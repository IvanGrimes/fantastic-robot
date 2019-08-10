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

export const mockStudios = ({
  page,
}: FetchStudiosInput): { studios: ShortStudio[]; hasNext: true } => {
  const studios: ShortStudio[] = [];

  for (let i = (page - 1) * 5; i < page * 5; i += 1) {
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
      favorite: Boolean(i % 2),
    });
  }

  return { studios, hasNext: true };
};

export type FetchStudiosInput = { page: number };

export const fetchStudios = ({ page }: FetchStudiosInput) =>
  from(
    new Promise<ReturnType<typeof mockStudios>>(resolve => {
      setTimeout(
        () => {
          resolve(mockStudios({ page }));
        },
        typeof window !== 'undefined' ? 3000 : 0
      );
    })
  );

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
