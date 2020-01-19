import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import * as ui from '@modules/ui';
import { ListItem, ListItemPersist } from './ListItem';
import {
  Wrapper,
  ListGrid,
  ListItemGrid,
  InfiniteScroll,
  InfiniteScrollLoader,
} from './List.styles';
import { StudioItem } from '../model/types';

const { Container } = ui

export type ListProps = ListItemPersist & {
  className?: string;
  list: StudioItem[];
  error: string;
  loading: boolean;
  isMapListEnabled: boolean;
  isMapListFullscreen: boolean;
  handleNext: () => void;
  hasNext: boolean;
};

export const List = ({
  className = '',
  error,
  list,
  loading,
  variant,
  isMapListEnabled,
  isMapListFullscreen,
  handleNext,
  hasNext,
  config,
  isConfigLoading,
  isMetroListLoading,
  metroList,
}: ListProps) => {
  const loaderList = new Array(12)
    .fill({})
    .map((_, index) => ({ id: index.toString() })) as StudioItem[];

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
          withTrailingSlash: false,
        }}
        hasMore={hasNext && !isMapListFullscreen}
      >
        <Container variant="primary">
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
                lg={variant === 'short' ? 3 : 12}
                md={variant === 'short' ? 4 : 12}
                xs={12}
                spacing={0}
                variant={variant}
              >
                <ListItem
                  {...item}
                  loading={loading}
                  variant={variant}
                  config={config}
                  isConfigLoading={isConfigLoading}
                  isMetroListLoading={isMetroListLoading}
                  metroList={metroList}
                />
              </ListItemGrid>
            ))}
          </ListGrid>
        </Container>
      </InfiniteScroll>
    </Wrapper>
  );
};
