import React, { FunctionComponent } from 'react';
import {
  Select as DefaultSelect,
  SelectProps as DefaultSelectProps,
  Skeleton,
} from '@components';

type SelectProps = DefaultSelectProps & { isLoading: boolean };

export const Select: FunctionComponent<SelectProps> = ({
  isLoading,
  ...props
}) => {
  if (isLoading) {
    return <Skeleton variant="rect" height="40px" width="100%" />;
  }

  return <DefaultSelect {...props} />;
};
