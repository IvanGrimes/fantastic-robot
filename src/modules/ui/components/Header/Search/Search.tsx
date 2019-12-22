import React from 'react';
import { ClearableInput } from '../../ClearableInput';

type Props = {
  onChange: (...args: any[]) => void;
  value: string;
};

export const Search = ({ onChange, value }: Props) => (
  <ClearableInput
    variant="filled"
    InputLabelProps={{ style: { display: 'none' } }}
    InputProps={{
      inputProps: {
        style: {
          padding: '10px',
          color: '#fff',
        },
      },
    }}
    onChange={onChange}
    value={value}
    placeholder="Поиск по названию"
    debounce={{ wait: 500 }}
  />
);
