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
import { getShadows } from '../../../../theme/shadows';
import {
  StudioListItemFavorite,
  StudioListItemFavoriteProps,
} from './StudioListItemFavorite';

export const Card = styled<ComponentType<CardProps>>(DefaultCard)`
  ${props => {
    const shadows = getShadows(props);

    return css`
      && {
        &:hover {
          box-shadow: ${shadows[5]};
        }
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

export const FavoriteButton = styled<
  ComponentType<StudioListItemFavoriteProps>
>(StudioListItemFavorite)`
  && {
    margin-right: -4px;
  }
`;

export const CardBottomGrid = styled<ComponentType<GridProps>>(Grid)`
  && {
    margin-bottom: -8px;
  }
`;
