import { Typography as DefaultTypography } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';
import styled from 'styled-components';
import { ComponentType } from 'react';

export const Typography = styled<ComponentType<TypographyProps>>(
  DefaultTypography
)`
  && {
    line-height: 0.75;
  }
`;

export const Amount = styled<ComponentType<TypographyProps>>(Typography)`
  && {
    margin-left: 8px;
  }
`;
