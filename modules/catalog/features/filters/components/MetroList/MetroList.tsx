import { FunctionComponent, useEffect } from 'react';
import { metroService, renderService } from '@model';
import { MetroListLoading } from './MetroListLoading';
import { MetroListSuccess } from './MetroListSuccess';
import { MetroListFail } from './MetroListFail';
import { MetroListProps } from './types';

export const MetroList: FunctionComponent<MetroListProps> = ({
  onChange,
  values,
}) => {
  const service = metroService.useService();

  useEffect(() => {
    if (service.isInit(service)) {
      service.effect([]);
    }
  }, [service]);

  return renderService(
    service,
    { onChange, values },
    {
      Loading: MetroListLoading,
      Success: MetroListSuccess,
      Fail: MetroListFail,
    }
  );
};
