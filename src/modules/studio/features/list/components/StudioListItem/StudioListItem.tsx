import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import Link from 'next/link';
import { StudioListItemProps } from './index';
import { Card, CardBottomGrid, CardContent } from './StudioListItem.styles';
import { Photos } from './Photos';
import { Title } from './Title';
import { Types } from './Types';
import { Rooms } from './Rooms';
import { Stations } from './Stations';
import { PriceType } from './PriceType';
import { StudioListItemStateProps } from './StudioListItemContainer';

type Props = StudioListItemProps & StudioListItemStateProps;

const _StudioListItem = ({
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
}: Props) => (
  <Link href="/studio/[id]" as={`/studio/${id}`} passHref>
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
              <Types
                loading={loading || isConfigLoading}
                interiorIds={interiorIds}
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

export const StudioListItem = memo(_StudioListItem);
