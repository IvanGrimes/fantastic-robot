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
import {
  Container,
  BarWrapper,
  DynamicRendering,
} from '@modules/ui/components';
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

const _StudioListFilterMobile = ({
  className,
  handleClearFilters,
  isLoading,
}: Props) => {
  const [isVisible, setVisibility] = useState(false);
  const handleToggleVisibility = useCallback(() => {
    setVisibility(!isVisible);
  }, [isVisible]);

  return (
    <Fragment>
      <Button
        variant="outlined"
        onClick={handleToggleVisibility}
        disabled={isLoading}
      >
        Фильтры
      </Button>
      <Dialog fullScreen open={isVisible} onClose={handleToggleVisibility}>
        <Wrapper className={className} isVisible={isVisible}>
          <DynamicRendering>
            <Grid container>
              <BarWrapper>
                <Container variant="primary">
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
