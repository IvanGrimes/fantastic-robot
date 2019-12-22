import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import dequal from 'dequal';
import { Container } from '../Container';
import { Hidden } from '../Hidden';
import { useHideOnScroll } from '../../hooks';
import { HeaderBar } from './HeaderBar';
import { Toolbar, Wrapper, AppBar } from './Header.styles';
import { FullscreenMapButton } from './FullscreenMapButton';
import { Logo } from './Logo';
import { Search } from './Search';
import { Menu } from './Menu';

type Props = {
  isHeaderVisible: boolean;
  handleSetHeaderVisibility: (visibility: boolean) => void;
  searchValue: string;
  handleSearch: (value: string) => void;
  showBar: boolean;
};

const _Header = ({
  isHeaderVisible,
  handleSetHeaderVisibility,
  searchValue,
  handleSearch,
  showBar,
}: Props) => {
  useHideOnScroll({
    isVisible: isHeaderVisible,
    handleSetVisibility: handleSetHeaderVisibility,
  });

  return (
    <Wrapper isHeaderVisible={isHeaderVisible}>
      <Grid container>
        <Grid container>
          <AppBar color="primary" position="static">
            <Container variant="fluid">
              <Toolbar>
                <Grid container justify="space-between" alignItems="center">
                  <Grid container item xs={12} md={7} alignItems="center">
                    <Grid item>
                      <Logo />
                    </Grid>
                    <Grid item xs={9} sm={8} md={7}>
                      <Search onChange={handleSearch} value={searchValue} />
                    </Grid>
                  </Grid>
                  <Menu />
                  <Hidden mdUp>
                    <FullscreenMapButton />
                  </Hidden>
                </Grid>
              </Toolbar>
            </Container>
          </AppBar>
        </Grid>
        <Grid container>{showBar && <HeaderBar />}</Grid>
      </Grid>
    </Wrapper>
  );
};

export const Header = memo(_Header, dequal);
