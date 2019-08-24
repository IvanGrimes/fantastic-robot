import React, { Fragment, memo, useCallback, useState } from 'react';
import {
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { useSpring } from 'react-spring';
import { FilterGrid, Wrapper } from './StudioListFilterMobile.styles';
import { BarWrapper } from '../../../../ui/components/Header/HeaderBar/HeaderBar.styles';
import { StudioListFilterSearch } from '../StudioListFilterSearch';
import { StudioListFilterStation } from '../StudioListFilterStation';
import { StudioListFilterType } from '../StudioListFilterType';
import { StudioListFilterPriceSegment } from '../StudioListFilterPriceSegment';

type Props = {
  className: string;
  handleClearFilters: () => void;
};

const _StudioListFilterMobile = ({ className, handleClearFilters }: Props) => {
  const [isVisible, setVisibility] = useState(false);
  const handleToggleVisibility = useCallback(() => setVisibility(!isVisible), [
    isVisible,
  ]);
  const animation = useSpring({
    opacity: isVisible ? 1 : 0,
  });

  return (
    <Fragment>
      <Button variant="outlined" onClick={handleToggleVisibility}>
        Фильтры
      </Button>
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
