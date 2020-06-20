import React, {
  FunctionComponent,
  ReactNode,
  useCallback,
  ChangeEvent,
} from 'react';
import {
  FormControl,
  FormControlProps,
  InputLabel,
  Select as MaterialSelect,
  MenuItem,
} from '@material-ui/core';

export type SelectProps = {
  list: { label: ReactNode; value: string }[];
  label: ReactNode;
  value: string;
  onChange: (value: string) => void;
  fullWidth?: boolean;
  size?: FormControlProps['size'];
};

export const Select: FunctionComponent<SelectProps> = ({
  label,
  list,
  value,
  onChange,
  fullWidth = true,
  size = 'small',
}) => {
  const handleChange = useCallback<
    (ev: ChangeEvent<{ value: unknown }>) => void
  >(({ target }) => onChange(target.value as string), [onChange]);

  return (
    <FormControl variant="outlined" fullWidth={fullWidth} size={size}>
      <InputLabel>{label}</InputLabel>
      <MaterialSelect
        value={value}
        onChange={handleChange}
        label={label}
        fullWidth
      >
        {list.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </MaterialSelect>
    </FormControl>
  );
};
