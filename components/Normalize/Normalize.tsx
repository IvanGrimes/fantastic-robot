import React, { FunctionComponent } from 'react';
import { CssBaseline } from '@material-ui/core';
import { GlobalStyles } from './Normalize.styles';

export const Normalize: FunctionComponent = () => (
  <>
    <GlobalStyles />
    <CssBaseline />
  </>
);
