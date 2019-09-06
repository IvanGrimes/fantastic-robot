import React, { useCallback } from 'react';
import {
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon,
} from '@material-ui/icons';
import { Grid, IconButton, Tooltip } from '@material-ui/core';
import { Icon } from './StudioListItemFavorite.styles';
import { StudioListItemFavoriteProps } from './index';

export const StudioListItemFavorite = ({
  id,
  className,
  isActive,
  handleToggleFavorite,
}: StudioListItemFavoriteProps) => {
  const handleClick = useCallback(() => handleToggleFavorite(id), [
    handleToggleFavorite,
    id,
  ]);

  return (
    <Tooltip
      title={isActive ? 'Удалить из избранного' : 'Добавить в избранное'}
    >
      <IconButton
        className={className}
        edge={false}
        onClick={handleClick}
        size="small"
      >
        <Grid container alignItems="center" justify="center">
          <Icon isActive={isActive}>
            {isActive ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </Icon>
        </Grid>
      </IconButton>
    </Tooltip>
  );
};
