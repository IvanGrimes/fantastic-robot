import React, { ChangeEventHandler, memo, useCallback } from 'react';
import { Grid, TextField, IconButton } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { ClearableInputProps } from './index';

const _ClearableInput = ({
  label,
  onChange,
  value,
  placeholder,
  variant = 'standard',
  InputLabelProps = {},
  InputProps = {},
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
        color="inherit"
        variant={variant as any}
        InputLabelProps={InputLabelProps}
        InputProps={{
          endAdornment: (
            <IconButton size="small" color="inherit" onClick={handleClear}>
              <CloseIcon />
            </IconButton>
          ),
          ...InputProps,
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
