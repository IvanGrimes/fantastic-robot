import React, { memo, useCallback } from 'react';
import { connect } from 'react-redux';
import { StudioListItemFavoriteContainerProps } from './index';
import { toggleFavoriteAsync } from '../../../../model/actions';
import { StudioListItemFavorite } from './StudioListItemFavorite';

type Props = typeof dispatchProps & StudioListItemFavoriteContainerProps;

const dispatchProps = {
  toggleFavorite: toggleFavoriteAsync.request,
};

const _StudioListItemFavoriteContainer = ({
  toggleFavorite,
  id,
  isActive,
  className = '',
}: Props) => {
  const handleClick = useCallback(() => toggleFavorite(id), [
    toggleFavorite,
    id,
  ]);

  return (
    <StudioListItemFavorite
      className={className}
      isActive={isActive}
      onClick={handleClick}
    />
  );
};

export const StudioListItemFavoriteContainer = connect(
  null,
  dispatchProps
)(memo(_StudioListItemFavoriteContainer));
