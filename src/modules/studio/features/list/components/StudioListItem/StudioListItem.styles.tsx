import styled, { css } from 'styled-components';
import { ComponentType } from 'react';
import { GridProps } from '@material-ui/core/Grid';
import {
  Grid,
  Card as DefaultCard,
  CardContent as DefaultCardContent,
} from '@material-ui/core';
import { CardProps } from '@material-ui/core/Card';
import { CardContentProps } from '@material-ui/core/CardContent';
import DefaultContentLoader, {
  IContentLoaderProps,
} from 'react-content-loader';
import { getShadows } from '../../../../../../theme/shadows';

export const Card = styled<ComponentType<CardProps>>(DefaultCard)<{
  isDisabled: boolean;
}>`
  ${({ isDisabled, ...props }) => {
    const shadows = getShadows(props);

    return css`
      && {
        display: flex;
        width: 100%;
        flex-direction: column;
        ${isDisabled
          ? css`
              cursor: default;
            `
          : css`
              &:hover {
                box-shadow: ${shadows[5]};
              }
            `}
      }
    `;
  }}
`;

export const CardContent = styled<ComponentType<CardContentProps>>(
  DefaultCardContent
)`
  && {
    cursor: pointer;
  }
`;

export const CardBottomGrid = styled<ComponentType<GridProps>>(Grid)`
  && {
    margin-top: 16px;
    margin-bottom: -8px;
  }
`;

export const ContentLoader = styled<ComponentType<IContentLoaderProps>>(
  DefaultContentLoader
)`
  ${({ width, height }) => css({ width, height })}
`;
