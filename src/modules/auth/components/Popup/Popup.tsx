import React, { ReactNode } from 'react';
import { SlideTransition, DynamicRendering } from '@modules/ui';
import { Dialog } from './Popup.styles';

export type PopupProps = {
  children: ReactNode | ReactNode[];
  isOpen: boolean;
  handleClose: () => void;
};

export const Popup = ({ isOpen, handleClose, children }: PopupProps) => (
  <Dialog
    open={isOpen}
    onClose={handleClose}
    TransitionComponent={SlideTransition}
    fullWidth
  >
    <DynamicRendering>{children}</DynamicRendering>
  </Dialog>
);
