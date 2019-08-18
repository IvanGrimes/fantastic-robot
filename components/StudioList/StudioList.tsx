import React, { memo } from 'react';
import dequal from 'dequal';
import { StudioListItem } from './StudioListItem';
import { ListGrid, ListItemGrid } from './StudioList.styles';
import { ShortStudio } from '../../redux/studios/types';
import { toggleFavoriteAsync } from '../../redux/studios/actions';

type Props = {
  className: string;
  list: ShortStudio[];
  error: string;
  loading: boolean;
  toggleFavorite: typeof toggleFavoriteAsync.request;
};

const _StudioList = ({
  className,
  error,
  list,
  loading,
  toggleFavorite,
}: Props) => {
  const loaderList = new Array(3).fill({});

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ListGrid className={className} component="ul" container spacing={4}>
      {(loading ? loaderList : list).map(item => (
        <ListItemGrid
          key={item.id}
          component="li"
          container
          item
          xl={6}
          lg={6}
          spacing={0}
        >
          <StudioListItem
            {...item}
            toggleFavorite={() => toggleFavorite(item.id)}
            loading={loading}
          />
        </ListItemGrid>
      ))}
    </ListGrid>
  );
};

export const StudioList = memo(_StudioList, dequal);
