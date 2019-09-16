export type MetroListResponse = MetroLineResponse[];

export type MetroLineResponse = {
  id: string;
  // eslint-disable-next-line camelcase
  hex_color: string;
  name: string;
  stations: MetroStationResponse[];
};

export type MetroStationResponse = {
  id: string;
  order: number;
  name: string;
  lat: number;
  lng: number;
};

export type MetroList = MetroLine[];

export type MetroLine = Omit<
  Omit<MetroLineResponse, 'stations'>,
  'hex_color'
> & {
  stations: MetroStation[];
};

export type MetroStation = MetroStationResponse & {
  color: MetroLineResponse['hex_color'];
};
