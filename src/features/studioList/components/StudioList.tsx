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
import { Container } from '../../../components/Container';
import { toggleFavoriteAsync } from '../model/actions';
import { ShortStudio } from '../model/types';

type Props = {
  className: string;
  list: ShortStudio[];
  error: string;
  loading: boolean;
  handleToggleFavorite: typeof toggleFavoriteAsync.request;
  listItemVariant: StudioListItemVariant;
  isMapListEnabled: boolean;
  isMapListFullscreen: boolean;
  handleNext: () => void;
};

const _StudioList = ({
  className,
  error,
  list,
  loading,
  handleToggleFavorite,
  listItemVariant,
  isMapListEnabled,
  isMapListFullscreen,
  handleNext,
}: Props) => {
  const loaderList = new Array(8).fill({});

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Wrapper isVisible={!isMapListFullscreen}>
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
        hasMore={!isMapListFullscreen}
      >
        <Container>
          <ListGrid
            className={className}
            component="ul"
            container
            spacing={4}
            isMapListEnabled={isMapListEnabled}
          >
            {(loading ? loaderList : list).map(item => (
              <ListItemGrid
                container
                key={item.id}
                item
                lg={listItemVariant === 'short' ? 3 : 12}
                md={listItemVariant === 'short' ? 4 : 12}
                xs={12}
                spacing={0}
                variant={listItemVariant}
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
