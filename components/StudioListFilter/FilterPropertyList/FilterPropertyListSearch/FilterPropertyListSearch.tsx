import React, { ChangeEventHandler, memo, useCallback } from 'react';
import { Grid, TextField, IconButton } from '@material-ui/core';
import { FilterPropertyListSearchProps } from './index';
import { Close as CloseIcon } from '@material-ui/icons';

const _FilterPropertyListSearch = ({
  onChange,
  value,
}: FilterPropertyListSearchProps) => {
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ev => onChange(ev.target.value),
    [onChange]
  );
  const handleClear = useCallback(() => onChange(''), [onChange]);

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
        label="Поиск"
        fullWidth
      />
    </Grid>
  );
};

export const FilterPropertyListSearch = memo(_FilterPropertyListSearch);
