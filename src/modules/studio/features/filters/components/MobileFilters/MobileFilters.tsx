import React, { Fragment, memo, useCallback, useMemo, useState } from 'react';
import {
  Button,
  Grid,
  IconButton,
  Portal,
  Typography,
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import dequal from 'dequal';
import { Container } from '../../../../../../components/Container';
import {
  FilterGrid,
  Wrapper,
  StudioListFilterStation,
  StudioListFilterPriceSegment,
  StudioListFilterType,
  GridWithMargin,
} from './MobileFilters.styles';
import { BarWrapper } from '../../../../../../features/ui/components/Header/HeaderBar/HeaderBar.styles';
import { SearchFilter } from '../SearchFilter';

type Props = {
  className: string;
  handleClearFilters: () => void;
  isLoading: boolean;
};

const _StudioListFilterMobile = ({
  className,
  handleClearFilters,
  isLoading,
}: Props) => {
  const [isVisible, setVisibility] = useState(false);
  const handleToggleVisibility = useCallback(() => setVisibility(!isVisible), [
    isVisible,
  ]);
  const layout = useMemo(
    () =>
      typeof document !== 'undefined'
        ? document.querySelector('#layout')
        : null,
    []
  );

  return (
    <Fragment>
      <Button
        variant="outlined"
        onClick={handleToggleVisibility}
        disabled={isLoading}
      >
        Фильтры
      </Button>
      <Portal container={layout}>
        <Wrapper className={className} isVisible={isVisible}>
          <Grid container>
            <BarWrapper>
              <Container>
                <Grid container justify="space-between" alignItems="center">
                  <GridWithMargin item>
                    <IconButton onClick={handleToggleVisibility}>
                      <CloseIcon />
                    </IconButton>
                  </GridWithMargin>
                  <GridWithMargin item>
                    <Typography component="span" variant="subtitle1">
                      Фильтры
                    </Typography>
                  </GridWithMargin>
                  <Grid item>
                    <Button variant="outlined" onClick={handleClearFilters}>
                      Очистить
                    </Button>
                  </Grid>
                </Grid>
              </Container>
            </BarWrapper>
          </Grid>
          <Container>
            <FilterGrid container>
              <SearchFilter />
              <StudioListFilterStation isClearable={false} />
              <StudioListFilterType isClearable={false} />
              <StudioListFilterPriceSegment isClearable={false} />
            </FilterGrid>
          </Container>
        </Wrapper>
      </Portal>
    </Fragment>
  );
};

export const MobileFilters = memo(_StudioListFilterMobile, dequal);
