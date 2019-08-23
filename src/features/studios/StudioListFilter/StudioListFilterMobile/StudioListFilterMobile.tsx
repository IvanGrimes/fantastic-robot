import React, { Fragment, memo } from 'react';
import {
  Button,
  Container,
  Grid,
  Typography,
  IconButton,
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { useSpring } from 'react-spring';
import {
  Wrapper,
  BarGrid,
  BarWrapper,
  FilterGrid,
} from './StudioListFilterMobile.styles';
import { StudioListFilterSearch } from '../StudioListFilterSearch';
import { StudioListFilterStation } from '../StudioListFilterStation';
import { StudioListFilterType } from '../StudioListFilterType';
import { StudioListFilterPriceSegment } from '../StudioListFilterPriceSegment';
import { StudioListFilterViewProps } from '../index';

const _StudioListFilterMobile = ({
  className,
  isVisible,
  handleToggleVisibility,
  handleClearFilters,
}: StudioListFilterViewProps) => {
  const animation = useSpring({
    opacity: isVisible ? 1 : 0,
  });

  return (
    <Fragment>
      <BarGrid container>
        <BarWrapper>
          <Container>
            <Button variant="outlined" onClick={handleToggleVisibility}>
              Фильтры
            </Button>
          </Container>
        </BarWrapper>
      </BarGrid>
      <Wrapper className={className} isVisible={isVisible} style={animation}>
        <Grid container>
          <BarWrapper>
            <Container>
              <Grid container justify="space-between" alignItems="center">
                <Grid item>
                  <IconButton onClick={handleToggleVisibility}>
                    <CloseIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography component="span" variant="subtitle1">
                    Фильтры
                  </Typography>
                </Grid>
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
            <StudioListFilterSearch />
            <StudioListFilterStation isClearable={false} />
            <StudioListFilterType isClearable={false} />
            <StudioListFilterPriceSegment isClearable={false} />
          </FilterGrid>
        </Container>
      </Wrapper>
    </Fragment>
  );
};

export const StudioListFilterMobile = memo(_StudioListFilterMobile);
