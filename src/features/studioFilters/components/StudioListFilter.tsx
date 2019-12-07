import React, { Fragment, memo } from 'react';
import dequal from 'dequal';
import { MobileFilters } from './MobileFilters';
import { Hidden } from '../../../components/Hidden';
import { DesktopFilters } from './DesktopFilters';

export type StudioListFilterProps = {
  className: string;
  handleClearFilters: () => void;
  isLoading: boolean;
};

const _StudioListFilter = ({
  className,
  handleClearFilters,
  isLoading,
}: StudioListFilterProps) => (
  <Fragment>
    <Hidden smUp>
      <MobileFilters
        className={className}
        handleClearFilters={handleClearFilters}
        isLoading={isLoading}
      />
    </Hidden>
    <Hidden xsDown>
      <DesktopFilters isLoading={isLoading} />
    </Hidden>
  </Fragment>
);

export const StudioListFilter = memo(_StudioListFilter, dequal);
