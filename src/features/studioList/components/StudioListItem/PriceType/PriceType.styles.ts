import styled from 'styled-components';
import { Typography as DefaultTypography } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';
import { ComponentType } from 'react';

export const Typography = styled<ComponentType<TypographyProps>>(
  DefaultTypography
)`
  && {
    line-height: 1;
  }
`;
