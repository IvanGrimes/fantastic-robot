import React, { memo, useCallback } from 'react';
import { connect } from 'react-redux';
import { FavoriteButtonContainerProps } from './index';
import { toggleFavoriteAsync } from '../../../../redux/studios/actions';
import { FavoriteButton } from './FavoriteButton';

type Props = typeof dispatchProps & FavoriteButtonContainerProps;

const dispatchProps = {
  toggleFavorite: toggleFavoriteAsync.request,
};

const _FavoriteButtonContainer = ({ toggleFavorite, id, isActive }: Props) => {
  const handleClick = useCallback(() => toggleFavorite(id), [
    toggleFavorite,
    id,
  ]);

  return <FavoriteButton isActive={isActive} onClick={handleClick} />;
};

export const FavoriteButtonContainer = connect(
  null,
  dispatchProps
)(memo(_FavoriteButtonContainer));
