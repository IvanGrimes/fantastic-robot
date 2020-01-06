import React, { Fragment, memo } from 'react';
import { Hidden, Loader, Select } from '@modules/ui';
import dequal from 'dequal';
import { useFunctional, UseFunctionalProps } from '../useFunctional';

export type RoomSelectDesktopProps = UseFunctionalProps & {
  isLoading: boolean;
  largeTabletQuery?: string;
};

const _RoomSelectDesktop = ({
  isLoading,
  largeTabletQuery = '(max-width: 0px)',
  ...props
}: RoomSelectDesktopProps) => {
  const { onChange, options } = useFunctional(props);
  const HiddenComponent = largeTabletQuery ? Hidden : Fragment;

  if (isLoading || (props.list && !props.list.length)) {
    return (
      <HiddenComponent query={largeTabletQuery}>
        <Loader width="307px" height="42px" style={{ marginBottom: '-6px' }} />
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

export const RoomSelectDesktop = memo(_RoomSelectDesktop, dequal);
