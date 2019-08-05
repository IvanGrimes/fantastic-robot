export type Station = {
  id: string;
  name: string;
  line: string;
  color: string;
};

export type StudioType = {
  id: string;
  name: string;
};

export type Image = {
  id: string;
  ratio: number;
};

export type ShortStudio = {
  id: string;
  name: string;
  priceSegment: 1 | 2 | 3;
  stations: Station[];
  types: StudioType[];
  roomsCount: number;
  photos: Image[];
};
