import React, { memo } from 'react';
import dequal from 'dequal';
import { StudioListItem, StudioListItemVariant } from './StudioListItem';
import {
  Wrapper,
  ListGrid,
  ListItemGrid,
  InfiniteScroll,
  InfiniteScrollLoader,
} from './StudioList.styles';
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
  handleNext: () => void;
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
  handleNext,
}: Props) => {
  const loaderList = new Array(3).fill({});

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Wrapper isVisible={!isFullscreenMap}>
      <InfiniteScroll
        dataLength={list.length}
        handleNext={handleNext}
        loader={<InfiniteScrollLoader />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        pagination={{
          route: '/page/[number]',
          pageNumber: '[number]',
          withTrailingSlash: true,
        }}
        hasMore={!isFullscreenMap}
      >
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
      </InfiniteScroll>
    </Wrapper>
  );
};

export const StudioList = memo(_StudioList, dequal);
