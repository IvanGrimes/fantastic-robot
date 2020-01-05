import React from 'react';
import { Calendar } from '@modules/studio/features/calendar';
import { DynamicRendering } from '@modules/ui';
import { Block } from '../Block';

export const Schedule = () => {
  return (
    <DynamicRendering>
      <Block title="Расписание">
        <Calendar />
      </Block>
    </DynamicRendering>
  );
};
