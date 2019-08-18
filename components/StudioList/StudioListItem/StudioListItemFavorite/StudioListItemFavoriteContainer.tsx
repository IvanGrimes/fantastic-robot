import React, { memo, useCallback } from 'react';
import { connect } from 'react-redux';
import { StudioListItemFavoriteContainerProps } from './index';
import { toggleFavoriteAsync } from '../../../../redux/studios/actions';
import { StudioListItemFavorite } from './StudioListItemFavorite';

type Props = typeof dispatchProps & StudioListItemFavoriteContainerProps;

const dispatchProps = {
  toggleFavorite: toggleFavoriteAsync.request,
};

const _StudioListItemFavoriteContainer = ({
  toggleFavorite,
  id,
  isActive,
}: Props) => {
  const handleClick = useCallback(() => toggleFavorite(id), [
    toggleFavorite,
    id,
  ]);

  return <StudioListItemFavorite isActive={isActive} onClick={handleClick} />;
};

export const StudioListItemFavoriteContainer = connect(
  null,
  dispatchProps
)(memo(_StudioListItemFavoriteContainer));
