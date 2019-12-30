import React from 'react';
import { Calendar } from '@modules/studio/features/calendar';
import { Wrapper } from './DatePicker.styles';

export type DatePickerProps = {
  isActive: boolean;
};

export const DatePicker = ({ isActive }: DatePickerProps) => {
  return (
    <Wrapper isVisible={isActive}>
      <Calendar />
    </Wrapper>
  );
};
