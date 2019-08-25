import React, { memo } from 'react';
import dequal from 'dequal';
import { useSpring } from 'react-spring';
import { useTheme } from '@material-ui/core';
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
import { getBreakpoints } from '../../../../theme';

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
  const theme = useTheme();
  const breakpoints = getBreakpoints({ theme });
  const wrapperDesktopSpring = useSpring({
    transform: isFullscreenMap ? 'translate(-4000px, 0)' : 'translate(0px, 0)',
  });
  const wrapperMobileSpring = useSpring({
    transform: isFullscreenMap ? 'translate(0, 100vh)' : 'translate(0, 0vh)',
  });
  const isDesktop =
    typeof window !== 'undefined'
      ? window.innerWidth > breakpoints.values.lg
      : true;
  const loaderList = new Array(3).fill({});

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Wrapper style={isDesktop ? wrapperDesktopSpring : wrapperMobileSpring}>
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
