import React, { Fragment, memo } from 'react';
import dequal from 'dequal';
import { StudioListFilterMobile } from './StudioListFilterMobile';
import { Hidden } from '../../../components/Hidden';
import { StudioListFilterDesktop } from './StudioListFilterDesktop';

export type StudioListFilterProps = {
  className: string;
  handleClearFilters: () => void;
  isLoading: boolean;
};

const _StudioListFilter = ({
  className,
  handleClearFilters,
  isLoading,
}: StudioListFilterProps) => {
  return (
    <Fragment>
      <Hidden smUp>
        <StudioListFilterMobile
          className={className}
          handleClearFilters={handleClearFilters}
          isLoading={isLoading}
        />
      </Hidden>
      <Hidden xsDown>
        <StudioListFilterDesktop isLoading={isLoading} />
      </Hidden>
    </Fragment>
  );
};

export const StudioListFilter = memo(_StudioListFilter, dequal);
