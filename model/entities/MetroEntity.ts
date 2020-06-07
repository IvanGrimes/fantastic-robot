import { Entity } from './internal';
import { StationId } from '../internal';

export type Metro = {
  id: StationId;
  name: string;
  color: string;
  lat: number;
  lng: number;
}[];

const name = 'metro';

export class MetroEntity extends Entity<typeof name, Metro> {
  constructor(data: Metro) {
    super(name, data);
  }
}
