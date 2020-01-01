import React, { memo } from 'react';
import { BaseHeaderBar, BaseHeaderBarProps } from '@modules/ui';

export const HeaderBar = memo(({ show }: Pick<BaseHeaderBarProps, 'show'>) => {
  return <BaseHeaderBar show={show}>back</BaseHeaderBar>;
});
