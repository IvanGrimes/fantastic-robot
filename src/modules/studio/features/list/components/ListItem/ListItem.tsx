import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import Link from 'next/link';
import { ListItemProps } from './index';
import { Card, CardBottomGrid, CardContent } from './ListItem.styles';
import { Photos } from './Photos';
import { Title } from './Title';
import { TextList } from '../../../../components/TextList';
import { Rooms } from '../../../../components/Rooms';
import { Stations } from '../../../../components/Stations';
import { PriceType } from '../../../../components/PriceType';

const _ListItem = ({
  variant,
  metroList,
  isMetroListLoading,
  config,
  isConfigLoading,
  id,
  loading,
  interiorIds,
  name,
  photoIds,
  roomsCount,
  priceType,
  stationIds,
}: ListItemProps) => (
  <Link href="/[studio]" as={`/${id}`} passHref>
    <Card isDisabled={loading}>
      <Grid item sm={variant === 'wide' ? 5 : 12} xs={12}>
        <Grid container>
          <Photos photoIds={photoIds} loading={loading} />
        </Grid>
      </Grid>
      <Grid container item sm={variant === 'wide' ? 7 : 12} xs={12}>
        <Grid
          component={CardContent}
          container
          direction="column"
          justify="space-between"
          spacing={2}
        >
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <Title name={name} loading={loading} />
            </Grid>
            <Grid item xs={12}>
              <TextList
                loading={loading || isConfigLoading}
                ids={interiorIds}
                list={config.interior}
              />
            </Grid>
            <Grid
              item
              xs={12}
              css={`
                && {
                  margin-top: 4px;
                }
              `}
            >
              <Rooms loading={loading} roomsCount={roomsCount} />
            </Grid>
          </Grid>
          <CardBottomGrid
            container
            justify="space-between"
            alignItems="flex-end"
          >
            <Grid item xs={8}>
              <Stations
                list={metroList}
                stationIds={stationIds}
                loading={loading || isMetroListLoading}
              />
            </Grid>
            <Grid item>
              <PriceType loading={loading} priceType={priceType} />
            </Grid>
          </CardBottomGrid>
        </Grid>
      </Grid>
    </Card>
  </Link>
);

export const ListItem = memo(_ListItem);
