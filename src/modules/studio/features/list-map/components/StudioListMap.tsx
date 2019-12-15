import React, { memo, useRef } from 'react';
import dequal from 'dequal';
import { Close as CloseIcon } from '@material-ui/icons';
import dynamic from 'next/dynamic';
import { useRequestAnimationFrame } from '@hooks/useRequestAnimationFrame';
import {
  MapGrid,
  OuterWrapper,
  InnerWrapper,
  CloseButton,
} from './StudioListMap.styles';
import { PreviewList } from './PreviewList';
import { StudioItem } from '../../list';
import { PinList } from './PinList';

const GoogleMap = dynamic(() => import('google-map-react'), { ssr: false });

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
          <GoogleMap
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
            <PinList studios={studios} />
          </GoogleMap>
          <PreviewList />
        </InnerWrapper>
      </OuterWrapper>
    </MapGrid>
  );
};

export const StudioListMap = memo(_StudioListMap, dequal);
