import { createService, http, GetPropsFromService } from '@model';
import { Config, ConfigEntity } from '../entities';

const fetchConfig = () =>
  http.get<Config>('/api/config').then(({ data }) => new ConfigEntity(data));

export type ConfigServiceProps = GetPropsFromService<typeof fetchConfig>;

export const configService = createService('config', fetchConfig);
