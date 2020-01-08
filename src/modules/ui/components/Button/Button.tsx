import React from 'react';
import { ButtonProps as DefaultButtonProps } from '@material-ui/core/Button';
import { Button as StyledButton } from './Button.styles';
import { Progress } from '../Progress';

export type ButtonProps = DefaultButtonProps & {
  loading?: boolean;
};

export const Button = ({
  loading = false,
  children,
  ...props
}: ButtonProps) => (
  <StyledButton disabled={loading} {...props}>
    {loading && <Progress size={20} />}
    {children}
  </StyledButton>
);
