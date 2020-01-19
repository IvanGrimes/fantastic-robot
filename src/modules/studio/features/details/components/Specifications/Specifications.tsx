import React, { useMemo } from 'react';
import { Grid } from '@material-ui/core';
import * as ui from '@modules/ui';
import { Rooms } from '../../../../components/Rooms';
import { TextList } from '../../../../components/TextList';
import { StationsGrid, Stations } from './Specifications.styles';
import { useDetails } from '../DetailsContext';

const { Loader } = ui

export const Specifications = () => {
  const {
    variant,
    isStudioLoading,
    studio,
    isRoomLoading,
    room,
    isConfigLoading,
    config,
    isMetroListLoading,
    metroList,
  } = useDetails();
  const { isLoading, interiorIds } = useMemo(() => {
    switch (variant) {
      case 'studio':
        return {
          isLoading: isStudioLoading,
          interiorIds: studio.interiorIds,
        };
      case 'room':
        return {
          isLoading: isRoomLoading,
          interiorIds: room.interiorIds,
        };
      default:
        throw new Error();
    }
  }, [
    isRoomLoading,
    isStudioLoading,
    room.interiorIds,
    studio.interiorIds,
    variant,
  ]);

  return (
    <Grid container spacing={2} justify="space-between" alignItems="flex-start">
      <Grid container spacing={1} item md={8} xs={12}>
        {variant === 'studio' ? (
          <Grid item sm="auto" xs={12}>
            <Rooms
              size="normal"
              loading={isStudioLoading}
              roomsCount={studio.roomsCount}
              skeleton={<Loader top="5px" width="50px" height="20px" />}
            />
          </Grid>
        ) : null}
        <Grid item>
          <TextList
            loading={isConfigLoading || isLoading}
            ids={interiorIds}
            list={config.interior}
            skeleton={<Loader top="5px" width="280px" height="20px" />}
          />
        </Grid>
        <Grid item xs={12}>
          <TextList
            loading={isConfigLoading || isStudioLoading}
            ids={studio.equipmentIds}
            list={config.equipment}
            size="small"
            skeleton={
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Loader top="5px" width="300px" height="15px" />
                <Loader
                  top="10px"
                  width="300px"
                  height="15px"
                  style={{ marginBottom: '12px' }}
                />
              </div>
            }
          />
        </Grid>
      </Grid>
      <StationsGrid container item sm={3} xs={12} justify="flex-end">
        <Stations
          size="small"
          loading={isMetroListLoading || isStudioLoading}
          stationIds={studio.stationIds}
          list={metroList}
          skeleton={<Loader top="4px" width="150px" height="20px" />}
        />
      </StationsGrid>
    </Grid>
  );
};
