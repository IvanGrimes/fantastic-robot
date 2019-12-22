import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { PriceType } from '@modules/studio/components/PriceType';
import { Rooms } from '@modules/studio/components/Rooms';
import * as data from '@modules/studio/features/data';
import { TextList } from '@modules/studio/components/TextList';
import { getInformation } from '../../model/selectors';
import { MainGrid, Stations, DescriptionGrid } from './Information.styles';

// TODO: Список залов
// TODO: Контакты
// TODO: Расписание
// TODO: Бронирование
// TODO: Декомпозиция
// TODO: Отзывчивость

export type InformationProps = {
  isLoading: boolean;
  isMetroListLoading: boolean;
  isConfigLoading: boolean;
  information: Omit<ReturnType<typeof getInformation>, 'photoIds'>;
  metroList: ReturnType<typeof data.selectors.getMetroList>;
  config: ReturnType<typeof data.selectors.getConfig>;
};

export const Information = ({
  isLoading,
  information,
  metroList,
  config,
  isConfigLoading,
  isMetroListLoading,
}: InformationProps) => {
  const {
    name,
    description,
    priceType,
    stationIds,
    interiorIds,
    equipmentIds,
  } = information;

  return (
    <MainGrid container>
      {isLoading ? (
        <span>loading</span>
      ) : (
        <>
          <Grid item xs={8}>
            <Grid
              container
              alignItems="center"
              justify="space-between"
              spacing={1}
            >
              <Grid item xs={10}>
                <Typography variant="h4" component="h1">
                  {name}
                </Typography>
              </Grid>
              <Grid item>
                <PriceType
                  size="extraLarge"
                  loading={isLoading}
                  priceType={priceType}
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              justify="space-between"
              alignItems="flex-start"
            >
              <Grid container spacing={1} item xs={8}>
                <Grid item>
                  <Rooms size="normal" loading={isLoading} roomsCount={2} />
                </Grid>
                <Grid item>
                  <TextList
                    loading={isConfigLoading}
                    ids={interiorIds}
                    list={config.interior}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextList
                    loading={isConfigLoading}
                    ids={equipmentIds}
                    list={config.equipment}
                    size="small"
                  />
                </Grid>
              </Grid>
              <Grid container item xs={3} justify="flex-end">
                <Stations
                  size="small"
                  loading={isMetroListLoading}
                  stationIds={stationIds}
                  list={metroList}
                />
              </Grid>
            </Grid>
            <DescriptionGrid container>
              <Typography>{description}</Typography>
            </DescriptionGrid>
          </Grid>
          <Grid item xs={4}>
            <Paper>Здесь будет окно оплаты</Paper>
          </Grid>
        </>
      )}
    </MainGrid>
  );
};
