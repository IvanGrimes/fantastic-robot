import React from 'react';
import { Hidden, Select } from '@modules/ui';
import { useFunctional, UseFunctionalProps } from '../useFunctional';

export type RoomSelectDesktopProps = UseFunctionalProps & {
  isLoading: boolean;
  largeTabletQuery: string;
};

export const RoomSelectDesktop = ({
  isLoading,
  largeTabletQuery,
  ...props
}: RoomSelectDesktopProps) => {
  const { onChange, options } = useFunctional(props);

  if (isLoading) {
    return (
      <Hidden query={largeTabletQuery}>
        <span>loading</span>
      </Hidden>
    );
  }

  return (
    <Select
      isLoading={isLoading}
      options={options}
      value={props.value}
      handleChange={onChange}
      label="Зал"
      defaultOption={0}
    />
  );
};
