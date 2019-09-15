import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { Grid, Switch } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import throttle from 'lodash/throttle';
import {
  BarWrapper,
  HideableTypography,
  MapSwitchGrid,
} from './HeaderBar.styles';
import { Container } from '../../../../../components/Container';
import { StudioListFilter } from '../../../../studioFilters/components';
import { getBreakpoints } from '../../../../../theme';
import { Theme } from '../../../../../theme/types';

type Props = {
  isMapListEnabled: boolean;
  handleToggleMapVisibility: () => void;
};

const _HeaderBar = ({ isMapListEnabled, handleToggleMapVisibility }: Props) => {
  const filters = useMemo(() => <StudioListFilter />, []);
  const theme = useTheme<Theme>();
  const breakpoints = getBreakpoints({ theme });
  const handleResize = useCallback(
    throttle(() => {
      if (!isMapListEnabled && window.innerWidth < breakpoints.values.md) {
        handleToggleMapVisibility();
      }
    }, 100),
    [breakpoints.values.md, handleToggleMapVisibility, isMapListEnabled]
  );

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

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
