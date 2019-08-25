import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import dequal from 'dequal';
import GoogleMapReact from 'google-map-react';
import throttle from 'lodash/throttle';
import { useTheme, IconButton } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { MapGrid, OuterWrapper, InnerWrapper } from './StudioListMap.styles';
import { getBreakpoints } from '../../../../theme';

type MapMarkerProps = {
  lat: number;
  lng: number;
  text: string;
};

const MapMarker = ({ text }: MapMarkerProps) => <div>{text}</div>;

type Props = {
  isFullscreenMap: boolean;
  handleFullscreenMapOn: () => void;
  handleFullscreenMapOff: () => void;
};

const _StudioListMap = ({
  isFullscreenMap,
  handleFullscreenMapOn,
  handleFullscreenMapOff,
}: Props) => {
  const theme = useTheme();
  const { values } = getBreakpoints({ theme });
  const [width, setWidth] = useState(0);
  const outerWrapperRef = useRef<HTMLDivElement | null>(null);
  const handleSetWidth = useCallback(
    throttle(() => {
      const outerWrapper = outerWrapperRef.current;

      if (outerWrapper) {
        setWidth(outerWrapper.offsetWidth);
      }
    }, 60),
    []
  );
  const handleSetFullscreen = useCallback(
    (value: boolean) => () => {
      if (value) {
        handleFullscreenMapOn();
      } else {
        handleFullscreenMapOff();
      }
    },
    [handleFullscreenMapOn, handleFullscreenMapOff]
  );

  useEffect(() => {
    handleSetWidth();
  }, [handleSetWidth]);

  useEffect(() => {
    if (window.innerWidth > values.md) {
      window.addEventListener('resize', handleSetWidth);
    }

    return () => window.removeEventListener('resize', handleSetWidth);
  }, [handleSetWidth, values.md]);

  if (!process.env.MAPS_API_TOKEN) {
    return null;
  }

  return (
    <MapGrid container>
      {isFullscreenMap ? (
        <IconButton
          onClick={handleSetFullscreen(false)}
          style={{ zIndex: 2000 }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
      <OuterWrapper ref={outerWrapperRef}>
        <InnerWrapper isFullscreen={isFullscreenMap} width={width}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.MAPS_API_TOKEN }}
            defaultCenter={{
              lat: 59.95,
              lng: 30.33,
            }}
            defaultZoom={11}
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
