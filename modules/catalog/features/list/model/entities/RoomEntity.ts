import { Entity, FiltersEnum, InteriorId, PhotoId } from '@model';
import { Studio } from './StudioEntity';

export type Room = {
  id: string;
  name: string;
  description: string | null;
  studio: Studio;
  photoIds: PhotoId[];
  photoExamples: PhotoId[];
  interiorIds: InteriorId[];
  minimalPrice: number;
  [FiltersEnum.area]: number;
  [FiltersEnum.height]: number;
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
