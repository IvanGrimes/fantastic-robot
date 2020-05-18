import { Studio } from './internal';
import { Entity } from './Entity';
import { Filters, InteriorId, PhotoId } from '../internal';

export type Room = {
  id: string;
  name: string;
  description: string | null;
  studio: Studio;
  photoIds: PhotoId[];
  photoExamples: PhotoId[];
  interiorIds: InteriorId[];
  minimalPrice: number;
  [Filters.area]: number;
  [Filters.height]: number;
};

const name = 'room';

export class RoomEntity extends Entity<typeof name, Room> {
  constructor(data: Room) {
    super(name, data);
  }

  getId() {
    return this.getData().id;
  }
}
