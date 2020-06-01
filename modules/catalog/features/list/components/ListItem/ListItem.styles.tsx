import React from 'react';
import {
  CardMedia as DefaultCardMedia,
  CardMediaProps,
} from '@material-ui/core';
import styled from 'styled-components';

export const CardMedia = styled((props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <DefaultCardMedia {...props} component="img" />
))<CardMediaProps<'img'>>`
  && {
    height: 250px;
  }
`;
