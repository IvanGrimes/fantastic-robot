import React, { FunctionComponent } from 'react';
import { ConfigEntity } from '@model';

export const MetroList: FunctionComponent<{
  config: ConfigEntity;
}> = ({ config }) => {
  console.log(config);
  return <div />;
};
