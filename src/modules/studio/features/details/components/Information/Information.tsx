import React from 'react';
import { Grid } from '@material-ui/core';
import * as data from '@modules/studio/features/data';
import { getInformation } from '../../model/selectors';
import { Header } from './Header';
import { Specifications } from './Specifications';
import { Description } from './Description';

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

  if (isLoading) {
    return <span>Loading</span>;
  }

  return (
    <Grid container>
      <Header name={name} priceType={priceType} isLoading={isLoading} />
      <Specifications
        isLoading={isLoading}
        equipmentIds={equipmentIds}
        isConfigLoading={isConfigLoading}
        isMetroListLoading={isMetroListLoading}
        metroList={metroList}
        config={config}
        stationIds={stationIds}
        interiorIds={interiorIds}
      />
      <Description content={description} />
    </Grid>
  );
};
