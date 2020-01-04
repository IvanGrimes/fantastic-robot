import dynamic from 'next/dynamic';
import React, { ReactNode, useMemo } from 'react';
import { Props as GoogleMapProps } from 'google-map-react';

type Props = {
  skeleton?: JSX.Element | null;
  children?: ReactNode | ReactNode[];
} & GoogleMapProps;

export const GoogleMap = ({
  skeleton = null,
  children = null,
  ...props
}: Props) => {
  const Component = useMemo(
    () =>
      dynamic<GoogleMapProps>(() => import('google-map-react'), {
        ssr: false,
        loading: () => skeleton,
      }),
    [skeleton]
  );
  const bootstrapURLKeys = process.env.MAPS_API_TOKEN;

  console.log(props);

  if (bootstrapURLKeys) {
    return (
      <Component
        bootstrapURLKeys={{ key: bootstrapURLKeys }}
        defaultZoom={11}
        {...props}
      />
    );
  }

  return null;
};
