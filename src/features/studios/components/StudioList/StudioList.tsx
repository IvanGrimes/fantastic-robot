import React, { memo } from 'react';
import dequal from 'dequal';
import { useSpring } from 'react-spring';
import { StudioListItem, StudioListItemVariant } from './StudioListItem';
import { Wrapper, ListGrid, ListItemGrid } from './StudioList.styles';
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
  isMapVisible: boolean;
  isFullscreenMap: boolean;
};

const _StudioList = ({
  className,
  error,
  list,
  loading,
  handleToggleFavorite,
  listItemVariant,
  isMapVisible,
  isFullscreenMap,
}: Props) => {
  const wrapperSpring = useSpring({
    transform: isFullscreenMap
      ? 'translate(-4000px, 0px)'
      : 'translate(0px, 0px)',
    duration: 300,
  });
  const loaderList = new Array(3).fill({});

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Wrapper style={wrapperSpring}>
      <Container>
        <ListGrid
          className={className}
          component="ul"
          container
          spacing={4}
          isMapVisible={isMapVisible}
        >
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
    </Wrapper>
  );
};

export const StudioList = memo(_StudioList, dequal);
