import React from 'react';
import { Slide } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';

export const SlideTransition = React.forwardRef<unknown, TransitionProps>(
  (props, ref) => <Slide direction="up" ref={ref} {...props} />
);
