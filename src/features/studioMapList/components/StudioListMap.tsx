import React, { memo, useRef } from 'react';
import dequal from 'dequal';
import GoogleMapReact from 'google-map-react';
import { Close as CloseIcon } from '@material-ui/icons';
import {
  MapGrid,
  OuterWrapper,
  InnerWrapper,
  CloseButton,
} from './StudioListMap.styles';
import { useRequestAnimationFrame } from '../../../hooks/useRequestAnimationFrame';
import { StudioMapPinListItem } from './StudioMapPinListItem';
import { StudioMapPreviewList } from './StudioMapPreviewList';
import { StudioItem } from '../../studioList/model/api';

type Props = {
  isMapListFullscreen: boolean;
  isHeaderVisible: boolean;
  handleFullscreenMapOn: () => void;
  handleFullscreenMapOff: () => void;
  studios: StudioItem[];
};

const _StudioListMap = ({
  isMapListFullscreen,
  handleFullscreenMapOn,
  handleFullscreenMapOff,
  isHeaderVisible,
  studios,
}: Props) => {
  const outerWrapperRef = useRef<HTMLDivElement | null>(null);
  const fullscreenMapOn = useRequestAnimationFrame(handleFullscreenMapOn);
  const fullscreenMapOff = useRequestAnimationFrame(handleFullscreenMapOff);

  if (!process.env.MAPS_API_TOKEN) {
    return null;
  }

  return (
    <MapGrid container>
      {isMapListFullscreen ? (
        <CloseButton
          variant="contained"
          color="secondary"
          onClick={fullscreenMapOff}
        >
          <CloseIcon />
        </CloseButton>
      ) : null}
      <OuterWrapper ref={outerWrapperRef}>
        <InnerWrapper
          isFullscreen={isMapListFullscreen}
          isHeaderVisible={isHeaderVisible}
        >
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.MAPS_API_TOKEN }}
            defaultCenter={{
              lat: 59.95,
              lng: 30.33,
            }}
            defaultZoom={11}
            options={{
              fullscreenControl: false,
              zoomControl: false,
              gestureHandling: 'greedy',
            }}
            onClick={isMapListFullscreen ? undefined : fullscreenMapOn}
          >
            {studios.map(({ id, location }) => (
              <StudioMapPinListItem
                id={id}
                lat={location.lat}
                lng={location.lon}
              />
            ))}
          </GoogleMapReact>
          <StudioMapPreviewList />
        </InnerWrapper>
      </OuterWrapper>
    </MapGrid>
  );
};

export const StudioListMap = memo(_StudioListMap, dequal);
