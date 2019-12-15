import styled from 'styled-components';
import { ComponentType } from 'react';
import { PaperProps } from '@material-ui/core/Paper';
import { Paper as DefaultPaper } from '@material-ui/core';

export const Paper = styled<ComponentType<PaperProps>>(DefaultPaper)`
  && {
    user-select: none;
  }
`;
