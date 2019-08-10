import React, { memo } from 'react';
import dequal from 'dequal';
import { StudioListItem } from './StudioListItem';
import { ListGrid, ListItemGrid } from './StudioList.styles';
import { ShortStudio } from '../../redux/studios/types';

type Props = {
  className: string;
  list: ShortStudio[];
  error: string;
  loading: boolean;
};

const _StudioList = ({ className, error, list, loading }: Props) => {
  const loaderList = new Array(3).fill({});

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ListGrid className={className} component="ul" container>
      {(loading ? loaderList : list).map(item => (
        <ListItemGrid key={item.id} component="li" item xs={12}>
          <StudioListItem {...item} loading={loading} />
        </ListItemGrid>
      ))}
    </ListGrid>
  );
};

export const StudioList = memo(_StudioList, dequal);
