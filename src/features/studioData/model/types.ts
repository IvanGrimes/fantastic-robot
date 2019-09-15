export type MetroList = [MetroLine?];

export type MetroLine = {
  id: string;
  // eslint-disable-next-line camelcase
  hex_color: string;
  name: string;
  stations: MetroStation[];
};

export type MetroStation = {
  id: string;
  order: number;
  name: string;
  lat: number;
  lng: number;
};
