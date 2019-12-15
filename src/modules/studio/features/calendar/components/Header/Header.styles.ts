import styled from 'styled-components';
import { ComponentType } from 'react';
import { Controls as DefaultControls, ControlsProps } from './Controls';

export const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
`;

export const Controls = styled<ComponentType<ControlsProps>>(DefaultControls)`
  && {
    position: absolute;
    right: 20px;
  }
`;