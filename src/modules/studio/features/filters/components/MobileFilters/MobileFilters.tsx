import React, { Fragment, memo, useCallback, useState } from 'react';
import {
  Button,
  Grid,
  IconButton,
  Typography,
  Dialog,
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import dequal from 'dequal';
import * as ui from '@modules/ui';
import {
  FilterGrid,
  Wrapper,
  StudioListFilterStation,
  StudioListFilterPriceSegment,
  StudioListFilterType,
  GridWithMargin,
} from './MobileFilters.styles';
import { SearchFilter } from '../SearchFilter';

type Props = {
  className: string;
  handleClearFilters: () => void;
  isLoading: boolean;
};

const { Container, DynamicRendering, SlideTransition, BaseHeaderBar } = ui;

const _StudioListFilterMobile = ({
  className,
  handleClearFilters,
  isLoading,
}: Props) => {
  const [isVisible, setVisibility] = useState(false);
  const handleOpen = useCallback(() => setVisibility(true), []);
  const handleClose = useCallback(() => setVisibility(false), []);

  return (
    <Fragment>
      <Button variant="outlined" onClick={handleOpen} disabled={isLoading}>
        Фильтры
      </Button>
      <Dialog
        fullScreen
        open={isVisible}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
      >
        <Wrapper className={className} isVisible={isVisible}>
          <DynamicRendering>
            <BaseHeaderBar>
              <Grid container justify="space-between" alignItems="center">
                <GridWithMargin item>
                  <IconButton onClick={handleClose}>
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
            </BaseHeaderBar>
            <Container variant="primary">
              <FilterGrid container>
                <SearchFilter />
                <StudioListFilterStation isClearable={false} />
                <StudioListFilterType isClearable={false} />
                <StudioListFilterPriceSegment isClearable={false} />
              </FilterGrid>
            </Container>
          </DynamicRendering>
        </Wrapper>
      </Dialog>
    </Fragment>
  );
};

export const MobileFilters = memo(_StudioListFilterMobile, dequal);
