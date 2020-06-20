import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';

export type IconProps = {
  name: keyof typeof iconsMap;
};

type MaterialIconProps = { className?: string };

const iconsMap = {
  clear: dynamic<MaterialIconProps>(() =>
    import('@material-ui/icons').then((m) => m.ClearAll)
  ),
  delete: dynamic<MaterialIconProps>(() =>
    import('@material-ui/icons').then((m) => m.DeleteOutline)
  ),
};

export const Icon: StyleableComponent<IconProps> = ({ className, name }) => {
  const Component = useMemo(() => iconsMap[name], [name]);

  return <Component className={className} />;
};
