import React from 'react';
import { Paper } from '@material-ui/core';
import { Header } from './Header';
import { Body } from './Body';

export const Calendar = () => {
  return (
    <Paper>
      <Header />
      <Body />
    </Paper>
  );
};
