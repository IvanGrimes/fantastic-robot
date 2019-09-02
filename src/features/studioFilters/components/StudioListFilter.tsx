import React, { Fragment, memo } from 'react';
import dequal from 'dequal';
import { StudioListFilterMobile } from './StudioListFilterMobile';
import { Hidden } from '../../../components/Hidden';
import { StudioListFilterDesktop } from './StudioListFilterDesktop';

export type StudioListFilterProps = {
  className: string;
  handleClearFilters: () => void;
};

const _StudioListFilter = ({
  className,
  handleClearFilters,
}: StudioListFilterProps) => {
  return (
    <Fragment>
      <Hidden smUp>
        <StudioListFilterMobile
          className={className}
          handleClearFilters={handleClearFilters}
        />
      </Hidden>
      <Hidden xsDown>
        <StudioListFilterDesktop />
      </Hidden>
    </Fragment>
  );
};

export const StudioListFilter = memo(_StudioListFilter, dequal);
