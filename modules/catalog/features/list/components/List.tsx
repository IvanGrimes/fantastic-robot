import React, { FunctionComponent } from 'react';
import { Grid, PaginationItem, Link } from '@components';
import { RequestError } from '@shared';
import Head from 'next/head';
import { ListSuccess } from './ListSuccess';
import { ListInit } from './ListInit';
import { GridList, Pagination } from './List.styles';
import { StudioList, RoomList } from '../model';
import { ListFail } from './ListFail';
import { parseQueryString, routes } from '@utils';

const Wrapper: FunctionComponent = ({ children }) => (
  <GridList item md={9} lg={10}>
    {children}
  </GridList>
);

const ListWrapper: FunctionComponent = ({ children }) => (
  <Grid container spacing={4} component="ul">
    {children}
  </Grid>
);

export const List: FunctionComponent<{
  isLoading: boolean;
  list: StudioList | RoomList;
  error: RequestError;
  hasNext: boolean;
  page: number;
}> = ({ isLoading, list, error, hasNext, page }) => {
  const q = parseQueryString();

  if (error.message) {
    return (
      <Wrapper>
        <ListFail error={error} />
      </Wrapper>
    );
  }

  if (isLoading) {
    return (
      <Wrapper>
        <ListWrapper>
          <ListInit />
        </ListWrapper>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Head>
        {page > 1 && <link rel="prev" href={`/page/${page - 1}`} />}
        {hasNext && <link rel="next" href={`/page/${page + 1}`} />}
      </Head>
      <ListWrapper>
        <ListSuccess list={list} />
      </ListWrapper>
      <Pagination
        count={hasNext ? 10 : page}
        shape="rounded"
        page={page}
        renderItem={(item) => {
          const nextPage = routes.list.getRoute({ page: item.page });

          return (
            <PaginationItem
              component={Link}
              route={nextPage.route}
              as={
                q.filters && Object.keys(q.filters).length
                  ? `${nextPage.as}?filters=${encodeURIComponent(
                      q.filters as string
                    )}`
                  : nextPage.as
              }
              {...item}
            />
          );
        }}
      />
    </Wrapper>
  );
};
