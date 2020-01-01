import React from 'react';
import { Switch } from '@material-ui/core';
import { MapSwitchGrid, HideableTypography } from './ListMapSwitch.styles';

type Props = {
  isActive: boolean;
  onClick: () => void;
};

export const ListMapSwitch = ({ isActive, onClick }: Props) => (
  <MapSwitchGrid container item xs={5} alignItems="center" justify="flex-end">
    <HideableTypography variant="caption" isVisible={isActive}>
      Скрыть карту
    </HideableTypography>
    <Switch
      color="default"
      onClick={onClick}
      checked={isActive}
      disableRipple
    />
    <HideableTypography variant="caption" isVisible={!isActive}>
      Показать карту
    </HideableTypography>
  </MapSwitchGrid>
);
