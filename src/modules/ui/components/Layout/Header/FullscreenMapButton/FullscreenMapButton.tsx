import React from 'react';
import { Button } from '@material-ui/core';
import { Map as MapIcon } from '@material-ui/icons';

type Props = {
  onClick: () => void;
};

export const FullscreenMapButton = ({ onClick }: Props) => (
  <Button variant="outlined" color="inherit" size="small" onClick={onClick}>
    <MapIcon />
  </Button>
);
