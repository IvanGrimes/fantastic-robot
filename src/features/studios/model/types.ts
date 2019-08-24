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

export type PriceSegment = 1 | 2 | 3;

export type ShortStudio = {
  id: string;
  name: string;
  priceSegment: PriceSegment;
  stations: Station[];
  types: StudioType[];
  roomsCount: number;
  photos: Image[];
  description: string;
  favorite: boolean;
};
