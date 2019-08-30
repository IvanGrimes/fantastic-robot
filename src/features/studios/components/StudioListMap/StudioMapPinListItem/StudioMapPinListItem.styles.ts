import styled, { css } from 'styled-components';
import { IconButton as DefaultIconButton } from '@material-ui/core';
import { ComponentType } from 'react';
import { IconButtonProps } from '@material-ui/core/IconButton';
import { getPrimaryPalette } from '../../../../../theme';

export const IconButton = styled<ComponentType<IconButtonProps>>(
  DefaultIconButton
)<{ isActive: boolean }>`
  ${({ isActive, ...props }) => {
    const { main } = getPrimaryPalette(props);

    return css`
      && {
        color: ${isActive ? main : 'inherit'};
        transition: color 300ms linear;
      }
    `;
  }}
`;
