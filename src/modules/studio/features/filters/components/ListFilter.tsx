import React, { Fragment, memo } from 'react';
import dequal from 'dequal';
import { Hidden } from '@modules/ui/components';
import { MobileFilters } from './MobileFilters';
import { DesktopFilters } from './DesktopFilters';

export type StudioListFilterProps = {
  className: string;
  handleClearFilters: () => void;
  isLoading: boolean;
};

const _ListFilter = ({
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

export const ListFilter = memo(_ListFilter, dequal);
