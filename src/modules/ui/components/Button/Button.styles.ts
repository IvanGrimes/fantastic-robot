import styled from 'styled-components';
import { Button as DefaultButton } from '@material-ui/core';
import { ComponentType } from 'react';
import { ButtonProps } from '@material-ui/core/Button';

export const Button = styled<ComponentType<ButtonProps>>(DefaultButton)`
  && {
    position: relative;
    overflow: hidden;
  }
`;
