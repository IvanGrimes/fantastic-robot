import React, { ReactNode } from 'react';
import * as ui from '@modules/ui';
import {
  HeaderBar as StyledHeaderBar,
  Icon,
  LinkWrapper,
} from './HeaderBarStyles';

type Props = ui.BaseHeaderBarProps & { backLink?: ReactNode };

export const HeaderBar = ({ show, className, backLink = null }: Props) => {
  return (
    <StyledHeaderBar className={className} show={show}>
      <Icon />
      <LinkWrapper>{backLink}</LinkWrapper>
    </StyledHeaderBar>
  );
};
