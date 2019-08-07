import { from } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ShortStudio } from './types';

const mockStudios = ({ first, last }: FetchStudiosInput): ShortStudio[] => {
  const studios: ShortStudio[] = [];

  for (let i = first; i < last; i += 1) {
    studios.push({
      id: i.toString(),
      name: `Test studio #${i}`,
      photos: [{ id: i.toString(), ratio: 16.9 }],
      priceSegment: i % 3 ? 1 : 2,
      roomsCount: Math.floor(Math.random() * 10),
      stations: [
        {
          id: Math.floor(Math.random() * 10).toString(),
          name: 'test',
          color: '#000',
          line: Math.floor(Math.random() * 10).toString(),
        },
      ],
      types: [{ id: i.toString(), name: `Test type #${i}` }],
    });
  }

  return studios;
};

export type FetchStudiosInput = { first: number; last: number };

export const fetchStudios = ({ first, last }: FetchStudiosInput) =>
  from(
    new Promise<ShortStudio[]>(resolve => {
      delay(500);

      resolve(mockStudios({ first, last }));
    })
  );
