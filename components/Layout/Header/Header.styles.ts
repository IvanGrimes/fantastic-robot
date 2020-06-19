import styled from 'styled-components';
import { Toolbar as DefaultToolbar, ToolbarProps } from '@material-ui/core';
import { Typography, TypographyProps } from '../../Typography';

export const Title = styled(Typography)<TypographyProps>`
  && {
    flex-grow: 1;
  }
`;

export const Toolbar = styled(DefaultToolbar)<ToolbarProps>`
  && {
    padding: 0;
  }
`;
