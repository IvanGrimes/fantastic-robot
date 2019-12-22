import styled from 'styled-components';
import { ComponentType } from 'react';
import { Paper } from '@material-ui/core';
import { PaperProps } from '@material-ui/core/Paper';
import { em } from 'polished';

export const BarWrapper = styled<ComponentType<PaperProps>>(Paper)`
  && {
    display: flex;
    width: 100%;
    border-radius: 0;
    min-height: ${em(32)};
    padding: ${em(12)} 0;
  }
`;
