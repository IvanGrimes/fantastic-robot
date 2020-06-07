import React, { FunctionComponent } from 'react';
import { DebouncedTextField } from '../DebouncedTextField';

export const Name: FunctionComponent<{
  onChange: (value: string) => void;
  value: string;
}> = ({ onChange, value }) => (
  <DebouncedTextField
    label="Поиск по названию"
    variant="outlined"
    onChange={onChange}
    value={value}
    fullWidth
  />
);
