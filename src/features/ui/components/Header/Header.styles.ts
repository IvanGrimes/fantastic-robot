import { Toolbar as DefaultToolbar } from '@material-ui/core';
import styled from 'styled-components';
import { ComponentType } from 'react';
import { ToolbarProps } from '@material-ui/core/Toolbar';
import { animated } from 'react-spring';

export const Wrapper = styled(animated.div)`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
`;

export const Toolbar = styled<ComponentType<ToolbarProps>>(DefaultToolbar)`
  && {
    padding: 0;
  }
`;
