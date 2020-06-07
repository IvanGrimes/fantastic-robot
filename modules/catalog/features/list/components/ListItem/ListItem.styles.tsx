import React from 'react';
import {
  CardMedia as DefaultCardMedia,
  CardMediaProps,
} from '@material-ui/core';
import styled from 'styled-components';

export const CardMedia = styled((props) => (
  <DefaultCardMedia {...props} component="img" />
))<CardMediaProps<'img'>>`
  && {
    height: 250px;
  }
`;
