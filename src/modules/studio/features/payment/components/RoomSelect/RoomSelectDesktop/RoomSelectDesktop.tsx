import React, { Fragment } from 'react';
import { Hidden, Select } from '@modules/ui';
import { useFunctional, UseFunctionalProps } from '../useFunctional';

export type RoomSelectDesktopProps = UseFunctionalProps & {
  isLoading: boolean;
  largeTabletQuery?: string;
};

export const RoomSelectDesktop = ({
  isLoading,
  largeTabletQuery = '(max-width: 0px)',
  ...props
}: RoomSelectDesktopProps) => {
  const { onChange, options } = useFunctional(props);
  const HiddenComponent = largeTabletQuery ? Hidden : Fragment;
  console.log(largeTabletQuery);
  if (isLoading) {
    return (
      <HiddenComponent query={largeTabletQuery}>
        <span>loading</span>
      </HiddenComponent>
    );
  }

  return (
    <HiddenComponent query={largeTabletQuery}>
      <Select
        isLoading={isLoading}
        options={options}
        value={props.value}
        handleChange={onChange}
        label="Зал"
        defaultOption={0}
      />
    </HiddenComponent>
  );
};
