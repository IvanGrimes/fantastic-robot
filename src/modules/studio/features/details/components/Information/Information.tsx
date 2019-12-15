import React, { useMemo } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { getPriceType } from '@utils/getPriceType';
import { Station } from '@components/Station';
import { mergeIdWithConfig } from '@modules/studio/features/list/utils/mergeIdWithConfig';
import { getConfig, getMetroList } from '../../../data/model/selectors';
import { getInformation } from '../../model/selectors';

export type InformationProps = {
  isLoading: boolean;
  isMetroListLoading: boolean;
  isConfigLoading: boolean;
  information: Omit<ReturnType<typeof getInformation>, 'photoIds'>;
  metroList: ReturnType<typeof getMetroList>;
  config: ReturnType<typeof getConfig>;
};

export const Information = ({
  isLoading,
  information,
  metroList,
}: InformationProps) => {
  const { name, description, priceType, stationIds } = information;
  const stationList = useMemo(
    () =>
      metroList
        ? mergeIdWithConfig<typeof metroList[number]>(stationIds, metroList)
        : [],
    [metroList, stationIds]
  );

  if (isLoading) {
    return <span>loading</span>;
  }

  return (
    <Grid container>
      <Grid item xs={8}>
        <Grid container alignItems="center" justify="space-between">
          <Grid item xs={10}>
            <Typography variant="h4" component="h1">
              {name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" component="span">
              {getPriceType(priceType)}
            </Typography>
          </Grid>
        </Grid>
        <Grid container component="ul">
          {stationList.map(({ id, color, value }) => (
            <Grid key={id} item component="li">
              <Station color={color} value={value} />
            </Grid>
          ))}
        </Grid>
        <Grid container>
          <Typography>{description}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Paper>Здесь будет окно оплаты</Paper>
      </Grid>
    </Grid>
  );
};
