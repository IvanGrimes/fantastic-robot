import React, { Fragment, memo } from 'react';
import dequal from 'dequal';
import { StudioItem } from '../../../studioList/model/types';
import { PinListItem } from './PinListItem';

type Props = {
  studios: StudioItem[];
};

const _PinList = ({ studios }: Props) => (
  <Fragment>
    {studios.map(({ id, location }) =>
      location ? (
        <PinListItem id={id} lat={location.lat} lng={location.lon} />
      ) : null
    )}
  </Fragment>
);

export const PinList = memo(_PinList, dequal);
