import React, { memo, useRef } from 'react';
import dequal from 'dequal';
import { Close as CloseIcon } from '@material-ui/icons';
import { useRequestAnimationFrame } from '@hooks/useRequestAnimationFrame';
import { GoogleMap } from '@modules/ui';
import {
  MapGrid,
  OuterWrapper,
  InnerWrapper,
  CloseButton,
} from './StudioListMap.styles';
import { PreviewList } from './PreviewList';
import { StudioItem } from '../../list';
import { PinList } from './PinList';

type Props = {
  isMapListFullscreen: boolean;
  isHeaderVisible: boolean;
  handleFullscreenMapOn: () => void;
  handleFullscreenMapOff: () => void;
  studios: StudioItem[];
};

const _ListMap = ({
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
            defaultCenter={{
              lat: 59.95,
              lng: 30.33,
            }}
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

export const ListMap = memo(_ListMap, dequal);
