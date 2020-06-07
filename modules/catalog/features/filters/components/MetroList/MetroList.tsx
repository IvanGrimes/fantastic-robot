import React, { FunctionComponent } from 'react';
import { ConfigEntity } from '../../../config/model';

export const MetroList: FunctionComponent<{
  config: ConfigEntity;
}> = ({ config }) => {
  console.log(config);
  return <div />;
};
