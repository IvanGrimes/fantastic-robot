import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import dequal from 'dequal';
import GoogleMapReact from 'google-map-react';
import throttle from 'lodash/throttle';
import { useTheme } from '@material-ui/core';
import { MapGrid, OuterWrapper, InnerWrapper } from './StudioListMap.styles';
import { getBreakpoints } from '../../../../theme';

type MapMarkerProps = {
  lat: number;
  lng: number;
  text: string;
};

const MapMarker = ({ text }: MapMarkerProps) => <div>{text}</div>;

const _StudioListMap = () => {
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

  useEffect(() => {
    handleSetWidth();
  }, [handleSetWidth]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    if (window.innerWidth > values.md) {
      // eslint-disable-next-line no-undef
      window.addEventListener('resize', handleSetWidth);
    }

    // eslint-disable-next-line no-undef
    return () => window.removeEventListener('resize', handleSetWidth);
  }, [handleSetWidth, values.md]);

  if (!process.env.MAPS_API_TOKEN) {
    return null;
  }

  return (
    <MapGrid container>
      <OuterWrapper ref={outerWrapperRef}>
        <InnerWrapper width={width}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.MAPS_API_TOKEN }}
            defaultCenter={{
              lat: 59.95,
              lng: 30.33,
            }}
            defaultZoom={11}
          >
            <MapMarker lat={59.955413} lng={30.337844} text="My Marker" />
          </GoogleMapReact>
        </InnerWrapper>
      </OuterWrapper>
    </MapGrid>
  );
};

export const StudioListMap = memo(_StudioListMap, dequal);
