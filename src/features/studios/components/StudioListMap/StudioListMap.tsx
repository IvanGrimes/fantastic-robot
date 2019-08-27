import React, { memo, useCallback, useRef } from 'react';
import dequal from 'dequal';
import GoogleMapReact from 'google-map-react';
import { Close as CloseIcon } from '@material-ui/icons';
import {
  MapGrid,
  OuterWrapper,
  InnerWrapper,
  CloseButton,
} from './StudioListMap.styles';

type MapMarkerProps = {
  lat: number;
  lng: number;
  text: string;
};

const MapMarker = ({ text }: MapMarkerProps) => <div>{text}</div>;

type Props = {
  isFullscreenMap: boolean;
  isHeaderVisible: boolean;
  handleFullscreenMapOn: () => void;
  handleFullscreenMapOff: () => void;
};

const _StudioListMap = ({
  isFullscreenMap,
  handleFullscreenMapOn,
  handleFullscreenMapOff,
  isHeaderVisible,
}: Props) => {
  const outerWrapperRef = useRef<HTMLDivElement | null>(null);
  const handleSetFullscreen = useCallback(
    (value: boolean) => () => {
      window.requestAnimationFrame(() => {
        if (value) {
          handleFullscreenMapOn();
        } else {
          handleFullscreenMapOff();
        }
      });
    },
    [handleFullscreenMapOn, handleFullscreenMapOff]
  );

  if (!process.env.MAPS_API_TOKEN) {
    return null;
  }

  return (
    <MapGrid container>
      {isFullscreenMap ? (
        <CloseButton
          variant="contained"
          color="secondary"
          onClick={handleSetFullscreen(false)}
        >
          <CloseIcon />
        </CloseButton>
      ) : null}
      <OuterWrapper ref={outerWrapperRef}>
        <InnerWrapper
          isFullscreen={isFullscreenMap}
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
            }}
            onClick={isFullscreenMap ? undefined : handleSetFullscreen(true)}
          >
            <MapMarker lat={59.955413} lng={30.337844} text="My Marker" />
          </GoogleMapReact>
        </InnerWrapper>
      </OuterWrapper>
    </MapGrid>
  );
};

export const StudioListMap = memo(_StudioListMap, dequal);
