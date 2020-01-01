import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import dequal from 'dequal';
import { Hidden } from '../../Hidden';
import { useHideOnScroll } from '../../../hooks';
import { FullscreenMapButton } from './FullscreenMapButton';
import { Logo } from './Logo';
import { Search } from './Search';
import { Menu } from './Menu';
import { BaseHeader } from '../BaseHeader';

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
    <BaseHeader isVisible={isHeaderVisible} showBar={showBar}>
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
    </BaseHeader>
  );
};

export const Header = memo(_Header, dequal);
