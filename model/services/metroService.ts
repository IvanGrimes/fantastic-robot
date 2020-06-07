import {
  MetroEntity,
  createService,
  http,
  GetPropsFromService,
  StationId,
} from '../internal';

export type RawMetro = {
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

const fetchMetro = () =>
  http
    .get<RawMetro>('/api/metro', { params: { cityId: 'moscow' } })
    .then(({ data }) =>
      data
        // eslint-disable-next-line camelcase
        .flatMap(({ hex_color, stations }) =>
          stations.map(({ id, name, lat, lng }) => ({
            id,
            name,
            color: hex_color,
            lat,
            lng,
          }))
        )
        .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
    )
    .then((data) => new MetroEntity(data));

export type MetroServiceProps = GetPropsFromService<typeof fetchMetro>;

export const metroService = createService('metro', fetchMetro);
