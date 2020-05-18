import {
  createService,
  http,
  Config,
  ConfigEntity,
  GetPropsFromService,
} from '../internal';

const fetchConfig = () =>
  http.get<Config>('/api/config').then(({ data }) => new ConfigEntity(data));

export type ConfigServiceProps = GetPropsFromService<typeof fetchConfig>;

export const configService = createService('config', fetchConfig);
