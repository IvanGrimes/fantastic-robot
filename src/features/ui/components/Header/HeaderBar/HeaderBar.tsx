import React, { memo, useMemo } from 'react';
import { Grid, Switch } from '@material-ui/core';
import {
  BarWrapper,
  HideableTypography,
  MapSwitchGrid,
} from './HeaderBar.styles';
import { Container } from '../../../../../components/Container';
import { StudioListFilter } from '../../../../studios/components/StudioListFilter';

type Props = {
  isMapVisible: boolean;
  handleToggleMapVisibility: () => void;
};

const _HeaderBar = ({ isMapVisible, handleToggleMapVisibility }: Props) => {
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
              <HideableTypography variant="caption" isVisible={isMapVisible}>
                Скрыть карту
              </HideableTypography>
              <Switch
                color="default"
                onClick={handleToggleMapVisibility}
                checked={isMapVisible}
                disableRipple
              />
              <HideableTypography variant="caption" isVisible={!isMapVisible}>
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
