import { StationId } from '../types';
import { http, ServiceError } from '../../../../model';

type Metro = {
  id: StationId;
  name: string;
  color: string;
  lat: number;
  lng: number;
}[];

type RawMetro = {
  // eslint-disable-next-line camelcase
  hex_color: string;
  id: string;
  name: string;
  stations: {
    id: StationId;
    lat: number;
    lng: number;
    name: string;
    order: number;
  }[];
}[];

export const fetchMetroList = () =>
  http
    .get<RawMetro>('/api/metro', { params: { cityId: 'moscow' } })
    .then(
      ({ data }) =>
        data
          .flatMap(({ hex_color: color, stations }) =>
            stations.map(({ id, name, lat, lng }) => ({
              id,
              name,
              color: `#${color}`,
              lat,
              lng,
            }))
          )
          .sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
          ) as Metro
    )
    .catch(() => {
      throw new ServiceError(
        'При загрузке списка станций метро произошла ошибка'
      );
    });

export type MetroList = Await<ReturnType<typeof fetchMetroList>>;
