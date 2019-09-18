export type StudiosResponse = {
  hasNext: boolean;
  studios: StudioItemResponse[];
};

export type StudioItemResponse = {
  id: string;
  name: string;
  interiorIds: string[];
  photoIds: string[];
  stationIds: string[];
  priceType: 1 | 2 | 3;
  location: {
    lon: number;
    lat: number;
  };
};
