import { ConfigObjectResponse } from '../../../controllers/config/list';
import {
  MetroLineResponse,
  MetroStationResponse,
} from '../../../controllers/metro/list';

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

export type ConfigObject = ConfigObjectResponse;
