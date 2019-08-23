import React, { ChangeEventHandler, memo, useCallback } from 'react';
import { Grid, TextField, IconButton } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { ClearableInputProps } from './index';

const _ClearableInput = ({
  label,
  onChange,
  value,
  placeholder,
}: ClearableInputProps) => {
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ev => onChange(ev.target.value),
    [onChange]
  );
  const handleClear = useCallback(() => value && onChange(''), [
    value,
    onChange,
  ]);

  return (
    <Grid container item xs={12}>
      <TextField
        InputProps={{
          endAdornment: (
            <IconButton href="" size="small" onClick={handleClear}>
              <CloseIcon />
            </IconButton>
          ),
        }}
        onChange={handleChange}
        value={value}
        label={label}
        placeholder={placeholder}
        fullWidth
      />
    </Grid>
  );
};

export const ClearableInput = memo(_ClearableInput);
