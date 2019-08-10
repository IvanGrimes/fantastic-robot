import React from 'react';
import {
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon,
} from '@material-ui/icons';
import { Grid, IconButton, Tooltip } from '@material-ui/core';
import { Icon } from './FavoriteButton.styles';

type Props = {
  isActive: boolean;
  onClick: () => void;
};

export const FavoriteButton = ({ onClick, isActive }: Props) => {
  return (
    <Tooltip
      title={isActive ? 'Удалить из избранного' : 'Добавить в избранное'}
    >
      <IconButton href="" edge={false} onClick={onClick} size="small">
        <Grid container alignItems="center" justify="center">
          <Icon isActive={isActive}>
            {isActive ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </Icon>
        </Grid>
      </IconButton>
    </Tooltip>
  );
};
