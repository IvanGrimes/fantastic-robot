import styled, { css } from 'styled-components';
import { ComponentType } from 'react';
import { ContainerProps } from '@material-ui/core/Container';
import { Container } from '@material-ui/core';

export const Wrapper = styled<ComponentType<ContainerProps>>(Container)<{
  isVisible: boolean;
}>`
  ${({ isVisible }) => css`
    && {
      position: fixed;
      max-width: 100%;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50px;
      background-color: grey;
      z-index: 6;
      transform: translate(${isVisible ? '0, 0px' : '0, 100px'});
      transition: transform 300ms ${isVisible ? 'ease-in' : 'ease-out'};
    }
  `}
`;
