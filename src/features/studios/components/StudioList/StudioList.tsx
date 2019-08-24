import React, { memo } from 'react';
import dequal from 'dequal';
import { StudioListItem, StudioListItemVariant } from './StudioListItem';
import { ListGrid, ListItemGrid } from './StudioList.styles';
import { ShortStudio } from '../../model/types';
import { toggleFavoriteAsync } from '../../model/actions';
import { Container } from '../../../../components/Container';

type Props = {
  className: string;
  list: ShortStudio[];
  error: string;
  loading: boolean;
  handleToggleFavorite: typeof toggleFavoriteAsync.request;
  listItemVariant: StudioListItemVariant;
};

const _StudioList = ({
  className,
  error,
  list,
  loading,
  handleToggleFavorite,
  listItemVariant,
}: Props) => {
  const loaderList = new Array(3).fill({});

  if (error) {
    return <p>{error}</p>;
  }

  console.log(listItemVariant === 'short' ? 4 : 12);

  return (
    <Container>
      <ListGrid className={className} component="ul" container spacing={4}>
        {(loading ? loaderList : list).map(item => (
          <ListItemGrid
            container
            key={item.id}
            item
            xs={listItemVariant === 'short' ? 3 : 12}
            spacing={0}
          >
            <StudioListItem
              {...item}
              handleToggleFavorite={handleToggleFavorite}
              loading={loading}
              variant={listItemVariant}
            />
          </ListItemGrid>
        ))}
      </ListGrid>
    </Container>
  );
};

export const StudioList = memo(_StudioList, dequal);
