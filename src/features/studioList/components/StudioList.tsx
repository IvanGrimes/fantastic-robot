import React, { memo } from 'react';
import dequal from 'dequal';
import { Grid, Typography } from '@material-ui/core';
import { StudioListItem, StudioListItemVariant } from './StudioListItem';
import {
  Wrapper,
  ListGrid,
  ListItemGrid,
  InfiniteScroll,
  InfiniteScrollLoader,
} from './StudioList.styles';
import { Container } from '../../../components/Container';
import { StudioItem } from '../model/types';

type Props = {
  className: string;
  list: StudioItem[];
  error: string;
  loading: boolean;
  listItemVariant: StudioListItemVariant;
  isMapListEnabled: boolean;
  isMapListFullscreen: boolean;
  handleNext: () => void;
  hasNext: boolean;
};

const _StudioList = ({
  className,
  error,
  list,
  loading,
  listItemVariant,
  isMapListEnabled,
  isMapListFullscreen,
  handleNext,
  hasNext,
}: Props) => {
  const loaderList = new Array(12).fill({}) as StudioItem[];

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
          <Grid container justify="center" xs={12}>
            <Typography component="span" variant="overline">
              You have seen it all
            </Typography>
          </Grid>
        }
        pagination={{
          route: '/page/[number]',
          pageNumber: '[number]',
          withTrailingSlash: true,
        }}
        hasMore={hasNext && !isMapListFullscreen}
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
