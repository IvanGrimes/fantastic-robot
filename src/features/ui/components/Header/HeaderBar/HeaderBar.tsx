import React, { memo, useMemo } from 'react';
import { Grid, Switch } from '@material-ui/core';
import {
  BarWrapper,
  HideableTypography,
  MapSwitchGrid,
} from './HeaderBar.styles';
import { Container } from '../../../../../components/Container';
import { StudioListFilter } from '../../../../studioFilters/components';

type Props = {
  isMapListEnabled: boolean;
  handleToggleMapVisibility: () => void;
};

const _HeaderBar = ({ isMapListEnabled, handleToggleMapVisibility }: Props) => {
  const filters = useMemo(() => <StudioListFilter />, []);

  return (
    <Grid container>
      <BarWrapper>
        <Container>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>{filters}</Grid>
            <MapSwitchGrid
              container
              item
              xs={5}
              alignItems="center"
              justify="flex-end"
            >
              <HideableTypography
                variant="caption"
                isVisible={isMapListEnabled}
              >
                Скрыть карту
              </HideableTypography>
              <Switch
                color="default"
                onClick={handleToggleMapVisibility}
                checked={isMapListEnabled}
                disableRipple
              />
              <HideableTypography
                variant="caption"
                isVisible={!isMapListEnabled}
              >
                Показать карту
              </HideableTypography>
            </MapSwitchGrid>
          </Grid>
        </Container>
      </BarWrapper>
    </Grid>
  );
};

export const HeaderBar = memo(_HeaderBar);
