import React, { useMemo } from 'react';
import { Grid } from '@material-ui/core';
import { Rooms } from '@modules/studio/components/Rooms';
import { TextList } from '@modules/studio/components/TextList';
import { Loader } from '@modules/ui';
import { Stations } from './Specifications.styles';
import { useDetails } from '../DetailsContext';

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
      <Grid container spacing={1} item xs={8}>
        {variant === 'studio' ? (
          <Grid item>
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
            skeleton={<Loader top="5px" width="300px" height="20px" />}
          />
        </Grid>
      </Grid>
      <Grid container item xs={3} justify="flex-end">
        <Stations
          size="small"
          loading={isMetroListLoading || isStudioLoading}
          stationIds={studio.stationIds}
          list={metroList}
          skeleton={<Loader top="4px" width="150px" height="20px" />}
        />
      </Grid>
    </Grid>
  );
};
