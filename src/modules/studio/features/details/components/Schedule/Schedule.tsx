import React from 'react';
import * as ui from '@modules/ui';
import * as services from '@modules/services';
import { Calendar } from '../../../calendar';
import { Block } from '../Block';

const { DynamicRendering } = ui;

export const Schedule = () => {
  const { isBot } = services.useWithSEO();

  return (
    <DynamicRendering force={isBot}>
      <Block title="Расписание">
        <Calendar />
      </Block>
    </DynamicRendering>
  );
};
