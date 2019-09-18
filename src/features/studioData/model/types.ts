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

export type MetroStation = Omit<MetroStationResponse, 'name'> & {
  color: MetroLineResponse['hex_color'];
  value: MetroStationResponse['name'];
};

export type ConfigObject = ConfigObjectResponse;

export type PriceType = '1' | '2' | '3';
