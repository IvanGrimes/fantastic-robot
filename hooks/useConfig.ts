import { useEffect } from 'react';
import { configService } from '@model';

export const useConfig = () => {
  const config = configService.useService();

  useEffect(() => {
    if (config.isInit(config)) {
      config.effect([]);
    }
  }, [config]);

  return config;
};
