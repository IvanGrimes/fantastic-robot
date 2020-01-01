import styled from 'styled-components';
import { ComponentType } from 'react';
import { PaperProps } from '@material-ui/core/Paper';
import { Paper } from '@material-ui/core';
import { em } from 'polished';

export const BarWrapper = styled<ComponentType<PaperProps>>(Paper)`
  && {
    display: flex;
    width: 100%;
    border-radius: 0;
    height: ${em(64)};
    padding: ${em(12)} 0;
    align-items: center;
  }
`;
