import React from 'react';
import { Calendar } from '@modules/studio/features/calendar';
import { DynamicRendering } from '@modules/ui';
import { useWithSEO } from '@modules/services';
import { Block } from '../Block';

export const Schedule = () => {
  const { isBot } = useWithSEO();

  return (
    <DynamicRendering force={isBot}>
      <Block title="Расписание">
        <Calendar />
      </Block>
    </DynamicRendering>
  );
};
