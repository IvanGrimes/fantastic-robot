import React, {
  ChangeEventHandler,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Grid, TextField, IconButton } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import debounceFn from 'lodash/debounce';
import { ClearableInputProps } from './index';

const _ClearableInput = ({
  label,
  onChange,
  value,
  placeholder,
  variant = 'standard',
  InputLabelProps = {},
  InputProps = {},
  debounce = { wait: 0 },
}: ClearableInputProps) => {
  const [isBouncing, setBouncing] = useState(false);
  const [internalValue, setInternalValue] = useState(value);

  const { wait, ...debounceSettings } = debounce;
  const isDebounced = Boolean(wait);

  const debouncedOnChange = useCallback<(nextValue: string) => void>(
    debounceFn(
      nextValue => {
        onChange(nextValue);
        setBouncing(false);
      },
      wait,
      debounceSettings
    ),
    [onChange]
  );

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ev => {
      const nextValue = ev.target.value;

      if (isDebounced) {
        setInternalValue(nextValue);
        debouncedOnChange(nextValue);

        if (!isBouncing) {
          setBouncing(true);
        }
      } else {
        onChange(nextValue);
      }
    },
    [debouncedOnChange, isBouncing, isDebounced, onChange]
  );

  const handleClear = useCallback(() => {
    if (value) {
      onChange('');

      if (isDebounced) {
        setInternalValue('');
      }
    }
  }, [value, onChange, isDebounced]);

  useEffect(() => {
    if (isDebounced && !isBouncing && internalValue !== value) {
      setInternalValue(value);
    }
  }, [internalValue, isBouncing, isDebounced, value]);

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
          style: {
            paddingRight: '5px',
          },
          ...InputProps,
        }}
        onChange={handleChange}
        value={isDebounced ? internalValue : value}
        label={label}
        placeholder={placeholder}
        fullWidth
      />
    </Grid>
  );
};

export const ClearableInput = memo(_ClearableInput);
