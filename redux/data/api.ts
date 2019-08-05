import { from } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ShortStudio } from './types';

const mockStudios: ShortStudio[] = [
  {
    id: '1',
    name: 'test',
    photos: [{ id: '1', ratio: 16.9 }],
    priceSegment: 1,
    roomsCount: 2,
    stations: [{ id: '1', name: 'test', color: '#000', line: '0' }],
    types: [{ id: '0', name: 'test' }],
  },
];

export const fetchStudios = () =>
  from(
    new Promise<ShortStudio[]>(resolve => {
      delay(500);

      resolve(mockStudios);
    })
  );
