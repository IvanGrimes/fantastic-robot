import React, { useCallback, useState } from 'react';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { TextFieldProps, TextField } from '../TextField';

export type PasswordFieldProps = Omit<TextFieldProps, 'type'>;

export const PasswordField = (props: PasswordFieldProps) => {
  const [isVisible, setVisibility] = useState(false);
  const handleToggleVisibility = useCallback(() => setVisibility(!isVisible), [
    isVisible,
  ]);
  const type = isVisible ? 'text' : 'password';
  const icon = isVisible ? <VisibilityOff /> : <Visibility />;

  return (
    <TextField
      {...props}
      type={type}
      InputProps={{
        endAdornment: (
          <IconButton size="small" onClick={handleToggleVisibility}>
            {icon}
          </IconButton>
        ),
      }}
    />
  );
};
